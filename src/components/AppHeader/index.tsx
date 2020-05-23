import React, { FC } from "react";
import { LogoLink, Wrapper } from "./styles";
import { Box, Text } from "react-basic-blocks";
import {
  CircleQuestion,
  Notification,
  UserSettings,
  Cloud,
} from "grommet-icons";
import colors from "styles/colors";

const AppHeader: FC = () => {
  return (
    <Wrapper flexDirection="row" justifyContent="space-between">
      <Box flexDirection="row">
        <LogoLink to="/">
          <Cloud color={colors.azureBlue} />
        </LogoLink>
        <LogoLink to="/assets">
          <Text fontSize="24px" fontWeight={200}>
            Assets
          </Text>
        </LogoLink>
      </Box>

      <Box flexDirection="row" margin="0 10px 0 0">
        <LogoLink to="/">
          <UserSettings width={36} height={36} />
        </LogoLink>
        <LogoLink to="/">
          <Notification />
        </LogoLink>
        <LogoLink to="/">
          <CircleQuestion />
        </LogoLink>
      </Box>
    </Wrapper>
  );
};

export default AppHeader;
