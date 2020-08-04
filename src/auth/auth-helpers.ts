// KEYCLOAK AUTH SETUP

import { config } from "config";
import Keycloak from "keycloak-js";

const checkLoginIframe = false;
const checkLoginIframeInterval = process.env
  .ENDEAVOR_KEYCLOAK_TOKEN_REFRESH_INTERVAL
  ? Number(process.env.ENDEAVOR_KEYCLOAK_TOKEN_REFRESH_INTERVAL)
  : 30;

export const logout = (keycloak: Keycloak.KeycloakInstance) => {
  if (keycloak.authenticated) {
    keycloak.clearToken();
  }
};

export const keycloakRefreshToken = (keycloak: Keycloak.KeycloakInstance) => {
  window.setInterval(async () => {
    try {
      await keycloak.updateToken(0);
    } catch (err) {
      logout(keycloak);
    }
  }, (checkLoginIframeInterval || 30) * 1000);
};

export const onKeycloakEvent = (
  keycloak: Keycloak.KeycloakInstance,
  setLatestEventDate: (text: string) => void,
  event: string
) => (error?: any) => {
  setLatestEventDate(`event: ${event}, ${Date.now()}`);
  onKeycloakEventHandler(keycloak, event, error);
};

export const onKeycloakEventHandler = (
  keycloak: Keycloak.KeycloakInstance,
  event: any,
  error?: any
) => {
  switch (event) {
    case "onAuthSuccess":
    case "onAuthRefreshSuccess":
      break;

    case "onAuthError":
    case "onAuthRefreshError":
    case "onAuthLogout":
      logout(keycloak);
      break;

    case "onTokenExpired":
      if (checkLoginIframe !== false) {
        keycloak.updateToken(5);
      }
      logout(keycloak);
      break;

    case "onReady":
      if (checkLoginIframe === false) {
        keycloakRefreshToken(keycloak);
      }
      break;
  }
};

export const setKCEventHandlers = (
  keycloak: Keycloak.KeycloakInstance,
  setLatestEventDate: (text: string) => void
) => {
  keycloak.onReady = onKeycloakEvent(keycloak, setLatestEventDate, "onReady");
  keycloak.onAuthSuccess = onKeycloakEvent(
    keycloak,
    setLatestEventDate,
    "onAuthSuccess"
  );
  keycloak.onAuthError = onKeycloakEvent(
    keycloak,
    setLatestEventDate,
    "onAuthError"
  );
  keycloak.onAuthRefreshSuccess = onKeycloakEvent(
    keycloak,
    setLatestEventDate,
    "onAuthRefreshSuccess"
  );
  keycloak.onAuthRefreshError = onKeycloakEvent(
    keycloak,
    setLatestEventDate,
    "onAuthRefreshError"
  );
  keycloak.onAuthLogout = onKeycloakEvent(
    keycloak,
    setLatestEventDate,
    "onAuthLogout"
  );
  keycloak.onTokenExpired = onKeycloakEvent(
    keycloak,
    setLatestEventDate,
    "onTokenExpired"
  );
};

export const initWithToken = async (
  tokensBase64: string,
  keycloak: Keycloak.KeycloakInstance
) => {
  try {
    const jsonToken: string = window.atob(tokensBase64);
    const jwt = JSON.parse(jsonToken);

    const options: any = {
      onLoad: "check-sso",
      promiseType: "native",
      token: (jwt.token || jwt.access_token) as string,
      refreshToken: jwt.refreshToken || jwt.refresh_token,
      idToken: (jwt.idToken || jwt.id_token) as string,
      redirectUri: window.location.href.split("?")[0],
      enableLogging: true,
      timeSkew: undefined,
      checkLoginIframeInterval,
      checkLoginIframe,
    };

    await keycloak.init(options);
  } catch (error) {
    // eslint-disable-next-line
    console.log("error when initializing", error);
    logout(keycloak);
  }
};

export const login = async (
  username: string,
  password: string,
  keycloak: Keycloak.KeycloakInstance
) => {
  try {
    const res = await fetch(`${config.authUrl}/v1/auth/tokens/grant`, {
      method: "POST",
      body: JSON.stringify({ username, password, encode: "base64" }),
      headers: { "Content-Type": "application/json" },
    });

    if (res && res.ok) {
      const data = await res.json();
      await initWithToken(data.token, keycloak);
    } else {
      throw new Error("Authentication invalid");
    }
  } catch (err) {
    logout(keycloak);
    throw err;
  }
};

export const passwordLogin = async (
  password: string,
  keycloak: Keycloak.KeycloakInstance
) => {
  try {
    const res = await fetch(`${config.authUrl}/v1/auth/tokens/password-auth`, {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res && res.ok) {
      const data = await res.json();
      await initWithToken(data.token, keycloak);
    } else {
      // eslint-disable-next-line
      console.log(
        "res not ok",
        `${res.status}, ${res.statusText}, ${JSON.stringify(res.body, null, 2)}`
      );
      throw new Error("Authentication invalid");
    }
  } catch (err) {
    // eslint-disable-next-line
    console.log(err);
    logout(keycloak);
    throw err;
  }
};
