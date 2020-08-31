import React, { FC } from "react";
import { LogoLink, AppHeaderWrapper, Button } from "./styles";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";

const AppHeader: FC = () => {
  return (
    <AppHeaderWrapper
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <LogoLink to="/">
        <img src="/images/logo.png" width="45" height="45" alt="logo" />
      </LogoLink>

      <Box flexDirection="row" margin="0 10px 0 0">
        <Button as={Link} to="/auth/signin" data-test="sign-in">
          Sign In
        </Button>
        <Button
          as={Link}
          to="/auth/signup"
          margin="0 0 0 20px"
          data-test="sign-up"
        >
          Sign Up
        </Button>
      </Box>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
