import React, { FC, useState } from "react";
import { Box, Text } from "react-basic-blocks";
import Tabs from "components/Tabs";

const tabValues = ["Tab 1", "Tab 2"];

const Landing: FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabValues[0]);
  return (
    <Box margin="0 20px">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        values={tabValues}
      />
      <Text fontSize="32px">Dashboard</Text>
    </Box>
  );
};

export default Landing;
