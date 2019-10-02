import styled from "styled-components";
import { Box } from "grommet";
import theme from "styles/theme";
import { NavLink } from "react-router-dom";

export const Wrapper = styled(Box)`
  position: sticky;
  top: 0;
  background-color: ${theme.global.colors["white"]};
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.7);
  height: 64px;
  z-index: 10;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  height: 100%;
  padding-left: 24px;
  position: relative;
  z-index: 5;
`;
