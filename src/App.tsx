import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Box } from "react-basic-blocks";
import { Route, Switch } from "react-router";
import AppHeader from "components/AppHeader";
import Landing from "components/Landing";
import Assets from "components/Assets";
import Footer from "components/Footer";

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

const App = (): ReactElement => (
  <>
    <Wrapper>
      <AppHeader />
      <div className="max-width-container">
        <Switch>
          <Route path="/assets" component={Assets} exact />
          <Route path="/" component={Landing} exact />

          <Route render={() => <Box padding="20px">Not found</Box>} />
        </Switch>
      </div>
      <Footer />
    </Wrapper>
  </>
);

export default App;
