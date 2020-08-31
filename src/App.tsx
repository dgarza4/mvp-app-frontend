import React, { FC, useContext } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch, Redirect } from "react-router";
import AppHeader from "components/AppHeader";
import Settings from "pages/Settings";
import Home from "pages/Home";
import Footer from "components/Footer";
import Help from "pages/Help";
import { AuthContext } from "components/CognitoAuth";
import Landing from "pages/Landing";
import Authentication from "pages/Authentication";

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

const ProtectedApp: FC = () => {
  return (
    <Wrapper>
      <AppHeader />
      <div className="max-width-container">
        <Switch>
          <Route path="/help" component={Help} exact />
          <Route path="/settings" component={Settings} exact />
          <Route path="/" component={Home} exact />

          <Route render={() => <Box padding="20px">Not found</Box>} />
        </Switch>
      </div>
      <Footer />
    </Wrapper>
  );
};

const App: FC = () => {
  const { isSignedIn } = useContext(AuthContext);
  return (
    <Switch>
      <Route
        path="/auth"
        render={() => (isSignedIn ? <Redirect to="/" /> : <Authentication />)}
      />
      <Route
        path="/"
        render={() => (isSignedIn ? <ProtectedApp /> : <Landing />)}
      />
      <Route render={() => <Box padding="20px">Not found</Box>} />
    </Switch>
  );
};

export default App;
