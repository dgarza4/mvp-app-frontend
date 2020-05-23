import React, { FC } from "react";
import { Box } from "react-basic-blocks";
import { Wrapper, StyledText } from "./styles";

const ComponentName: FC = () => {
  return (
    <Box>
      <Wrapper flexDirection="row">
        <StyledText>ComponentName</StyledText>
      </Wrapper>
    </Box>
  );
};

export default ComponentName;
