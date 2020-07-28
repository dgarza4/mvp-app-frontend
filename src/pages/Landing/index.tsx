import React, { FC, useState } from "react";
import { Box, Text } from "react-basic-blocks";
import Tabs from "components/Tabs";
import HeaderTags from "components/HeaderTags";

const tabValues = ["Tab 1", "Tab 2"];

const Landing: FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabValues[0]);
  return (
    <>
      <HeaderTags title="UI Kit" description="This is the assets page" />
      <Box margin="40px 20px">
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          values={tabValues}
        />
        <Text fontSize="32px" margin="40px 0">
          Dashboard
        </Text>
      </Box>
    </>
  );
};

export default Landing;
