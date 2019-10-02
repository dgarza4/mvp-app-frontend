import React, { FC } from "react";
import { Box, Text } from "grommet";
import { LogoLink, Wrapper } from "./styles";
import Logo from "./Logo";
import SettingsIcon from "../Icons/SettingsIcon";
import NotificationIcon from "../Icons/NotificationIcon";
import HelpIcon from "../Icons/HelpIcon";

const AppHeader: FC = () => {
  return (
    <Wrapper direction="row" justify="between">
      <Box direction="row">
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <LogoLink to="/assets">
          <Text size="24px" weight={200}>
            Assets
          </Text>
        </LogoLink>
      </Box>

      <Box direction="row" margin={{ right: "medium" }}>
        <LogoLink to="/">
          <SettingsIcon width={36} height={36} />
        </LogoLink>
        <LogoLink to="/">
          <NotificationIcon />
        </LogoLink>
        <LogoLink to="/">
          <HelpIcon />
        </LogoLink>
      </Box>
    </Wrapper>
  );
};

export default AppHeader;
