import React, { FC, useState } from "react";
import { Box, Text } from "grommet";
import Tabs from "components/Tabs";

const tabValues = [
  "Tab 1",
  "Tab 2",
];

const Dashboards: FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabValues[0]);
  return (
    <Box margin={{ horizontal: "medium" }}>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        values={tabValues}
      />
      <Text size="32px">Dashboard</Text>
    </Box>
  );
};

export default Dashboards;
