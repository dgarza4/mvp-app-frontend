import Keycloak from "keycloak-js";

function generateKeycloakInitOptions(): Keycloak.KeycloakInitOptions {
  const options: Keycloak.KeycloakInitOptions = {
    onLoad: "login-required" as Keycloak.KeycloakOnLoad,
  };

  return options;
}

const keycloakConfig = {
  realm: process.env.REACT__APP_AUTH__REALM || "mvpapp",
  url: process.env.REACT_APP_AUTH_URL || "http://localhost:30080/auth/",
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID || "mvp-app-frontend",
};

export const keycloak: Keycloak.KeycloakInstance = Keycloak(keycloakConfig);

export const keycloakProviderInitConfig: Keycloak.KeycloakInitOptions = generateKeycloakInitOptions();

// const onKeycloakEvent = (event: any, error: any) => {
//   // if (
//   //   event === "onReady" &&
//   //   keycloakProviderInitConfig.checkLoginIframe === false
//   // ) {
//   //   keycloakRefreshToken();
//   // }
// };

// const onKeycloakTokens = (tokens: any) => {
//   // to be used as as a test to see if the token is actually valid and auth server reachable
//   // console.log(">>> TOKENS Base64: ", window.btoa(JSON.stringify(tokens)));
//   keycloak
//     .loadUserProfile()
//     .then(function (profile) {
//       console.log(`>>> PROFILE: ${JSON.stringify(profile, null, 2)}`);
//     })
//     .catch(function () {
//       console.log(">>> Failed to load user profile");
//     });
// };
