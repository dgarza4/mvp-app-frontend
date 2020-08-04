import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch } from "react-router";
import AppHeader from "components/AppHeader";
import Settings from "pages/Settings";
import Landing from "pages/Landing";
import Footer from "components/Footer";
import Help from "pages/Help";

import { useKeycloak } from "@react-keycloak/web";

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

const App = (): ReactElement => {
  const [keycloak, initialized] = useKeycloak();

  return (
    <>
      {initialized && keycloak.authenticated ? (
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
      ) : (
        ""
      )}
    </>
  );
};

export default App;
