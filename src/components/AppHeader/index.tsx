import React, { FC } from "react";
import { LogoLink, Wrapper } from "./styles";
import { Box } from "react-basic-blocks";
import { CircleQuestion, UserSettings, Cloud } from "grommet-icons";
import colors from "styles/colors";

const AppHeader: FC = () => {
  return (
    <Wrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <LogoLink to="/">
        <Cloud color={colors.azureBlue} />
      </LogoLink>

      <Box flexDirection="row" margin="0 10px 0 0">
        <LogoLink to="/settings">
          <UserSettings width={36} height={36} />
        </LogoLink>
        <LogoLink to="/help">
          <CircleQuestion />
        </LogoLink>
      </Box>
    </Wrapper>
  );
};

export default AppHeader;
