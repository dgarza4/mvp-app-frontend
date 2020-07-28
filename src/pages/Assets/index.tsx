import React, { FC } from "react";
import { Box, Text } from "react-basic-blocks";
import HeaderTags from "components/HeaderTags";

const Assets: FC = () => {
  return (
    <>
      <HeaderTags title="UI Kit" description="This is the assets page" />
      <Box margin="20px">
        <Text fontSize="32px">Assets</Text>
      </Box>
    </>
  );
};

export default Assets;
