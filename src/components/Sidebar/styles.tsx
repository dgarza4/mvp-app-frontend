import styled from "styled-components";
import { Text } from "react-basic-blocks";

export const StyledText = styled(Text)`
  font-size: 20px;
`;

export const SidebarContainer = styled.div`
  height: calc(100vh - 64px);
  padding: 0 30px;
  box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 10;
  left: -350px;
  background-color: #fff;
  overflow-x: hidden;
  transition: left 0.5s;
  top: 64px;
  width: 345px;

  &.open {
    left: 0px;
  }

  @media only screen and (max-width: 767px) {
    top: 60px;
    height: calc(100vh - 60px);
    left: -100%;
    width: 100%;
  }
`;
