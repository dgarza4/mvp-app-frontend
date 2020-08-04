import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch } from "react-router";
import AppHeader from "components/AppHeader";
import Settings from "pages/Settings";
import Landing from "pages/Landing";
import Footer from "components/Footer";
import Help from "pages/Help";

// TODO: remove when Auth works
import Keycloak from "keycloak-js";
import { KeycloakProvider } from "@react-keycloak/web";

function generateKeycloakInitOptions(): Keycloak.KeycloakInitOptions {
  const options: Keycloak.KeycloakInitOptions = {
    onLoad: "check-sso" as Keycloak.KeycloakOnLoad,
  };

  return options;
}

const keycloakConfig = {
  realm: process.env.REACT__APP_AUTH__REALM || "mvpapp",
  url: process.env.REACT_APP_AUTH_URL || "http://localhost:30080/auth/",
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID || "mvp-app-frontend",
};
console.log(`>>> KC CONFIG: ${JSON.stringify(keycloakConfig, null, 2)}`);
const keycloak: Keycloak.KeycloakInstance = Keycloak(keycloakConfig);

const keycloakProviderInitConfig: Keycloak.KeycloakInitOptions = generateKeycloakInitOptions();

const onKeycloakEvent = (event: any, error: any) => {
  console.log("onKeycloakEvent", event, error);
  // if (
  //   event === "onReady" &&
  //   keycloakProviderInitConfig.checkLoginIframe === false
  // ) {
  //   keycloakRefreshToken();
  // }
};

const onKeycloakTokens = (tokens: any) => {
  // to be used as as a test to see if the token is actually valid and auth server reachable
  // console.log(">>> TOKENS Base64: ", window.btoa(JSON.stringify(tokens)));
  console.log("onKeycloakTokens", tokens);
  keycloak
    .loadUserProfile()
    .then(function (profile) {
      console.log(`>>> PROFILE: ${JSON.stringify(profile, null, 2)}`);
    })
    .catch(function () {
      console.log(">>> Failed to load user profile");
    });
};

// TODO: REMOVE TILL HERE

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .max-width-container {
    min-height: calc(100vh - 64px);
    align-self: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    max-width: 1440px;
  }
`;

// TODO: remove when AUTH works
const App = (): ReactElement => (
  <>
    <KeycloakProvider
      keycloak={keycloak}
      initConfig={keycloakProviderInitConfig}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
    >
      <Wrapper>
        <AppHeader />
        <div className="max-width-container">
          <Switch>
            <Route path="/help" component={Help} exact />
            <Route path="/settings" component={Settings} exact />
            <Route path="/" component={Landing} exact />

            <Route render={() => <Box padding="20px">Not found</Box>} />
          </Switch>
        </div>
        <Footer />
      </Wrapper>
    </KeycloakProvider>
  </>
);

export default App;
