import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "styles/global-styles";
import App from "App";
import { KeycloakProvider } from "@react-keycloak/web";
import { keycloak, keycloakProviderInitConfig } from "./auth/KeycloakAuth";

const FullApp = () => {
  return (
    <KeycloakProvider
      keycloak={keycloak}
      initConfig={keycloakProviderInitConfig}
      // onEvent={onKeycloakEvent}
      // onTokens={onKeycloakTokens}
    >
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </KeycloakProvider>
  );
};

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrate(<FullApp />, rootElement);
} else {
  render(<FullApp />, rootElement);
}
