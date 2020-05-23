import styled from "styled-components";
import { Box } from "react-basic-blocks";
import { Link } from "react-router-dom";

export const FooterLink = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

export const LinkWrapper = styled(Box)`
  margin: 0 30px;
  a + a {
    margin-left: 40px;
  }
`;

export const FooterWrapper = styled(Box)`
  height: 150px;
  background-color: #1d1d1d;
`;
