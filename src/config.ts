export const config = {
  pageTitle: "UI Kit",
  apiUrl: process.env.REACT_APP_API_URL,
  authUrl: process.env.REACT_APP_AUTH_URL || "/api/auth",
  keycloakRealm: process.env.REACT_APP_KEYCLOAK_REALM || "mvpapp",
  keycloakUrl: process.env.REACT_APP_KEYCLOAK_URL || "/auth/",
  keycloakClientId:
    process.env.REACT_APP_KEYCLOAK_CLIENT_ID || "mvp-app-frontend",
};
