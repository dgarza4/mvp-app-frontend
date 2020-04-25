import React, { FC } from "react";
import { Box } from "grommet";
import { Wrapper, StyledText } from "./styles";

const Component: FC = () => {
  return (
    <Box>
      <Wrapper direction="row">
        <StyledText>COMPONENT NAME</StyledText>
      </Wrapper>
    </Box>
  );
};

export default Component;
