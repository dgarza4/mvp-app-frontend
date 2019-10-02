import React, { ReactElement } from "react";
import styled from "styled-components/macro";
import { Box, Grommet as UnstyledGrommet } from "grommet";
import { Route, Switch } from "react-router";
import theme from "./styles/theme";
import AppHeader from "components/AppHeader";
import Dashboards from "components/Dashboards";
import Assets from "components/Assets";

const Grommet = styled(UnstyledGrommet)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;

const App = (): ReactElement => (
  <Grommet theme={theme} plain>
    <AppHeader />
    <Switch>
      <Route path="/assets" component={Assets} exact />
      <Route path="/" component={Dashboards} exact />

      <Route render={() => <Box pad="medium">Not found</Box>} />
    </Switch>
  </Grommet>
);

export default App;
