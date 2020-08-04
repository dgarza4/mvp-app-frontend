import React, { FC } from "react";
import { Text } from "react-basic-blocks";
import HeaderTags from "components/HeaderTags";

const Settings: FC = () => {
  return (
    <>
      <HeaderTags title="Settings" description="This is the settings page" />
      <Text fontSize="32px" margin="40px">
        This is the settings page.
      </Text>
    </>
  );
};

export default Settings;
