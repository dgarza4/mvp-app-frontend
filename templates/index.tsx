import React, { FC } from "react";
import { Box } from "grommet";
import { Wrapper, StyledText } from "./styles";

const ComponentName: FC = () => {
  return (
    <Box>
      <Wrapper direction="row">
        <StyledText>ComponentName</StyledText>
      </Wrapper>
    </Box>
  );
};

export default ComponentName;
