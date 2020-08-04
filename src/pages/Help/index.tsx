import React, { FC } from "react";
import { Text } from "react-basic-blocks";
import HeaderTags from "components/HeaderTags";

const Help: FC = () => {
  return (
    <>
      <HeaderTags title="Help" description="This is the help page" />
      <Text fontSize="32px" margin="40px">
        This is the help page.
      </Text>
    </>
  );
};

export default Help;
