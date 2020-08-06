import Keycloak from "keycloak-js";
import { config } from "config";

function generateKeycloakInitOptions(): Keycloak.KeycloakInitOptions {
  const options: Keycloak.KeycloakInitOptions = {
    onLoad: "login-required" as Keycloak.KeycloakOnLoad,
  };

  return options;
}

const keycloakConfig = {
  realm: config.keycloakRealm,
  url: config.keycloakUrl,
  clientId: config.keycloakClientId,
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
