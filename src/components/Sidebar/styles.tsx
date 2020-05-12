import styled from "styled-components";
import { Text } from "grommet";

export const StyledText = styled(Text)`
  font-size: 20px;
`;

export const SidebarContainer = styled.div`
  height: calc(100vh - 85px);
  position: fixed;
  z-index: 10;
  left: -345px;
  background-color: #1c1c1c;
  overflow-x: hidden;
  transition: left 0.5s;
  top: 85px;
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
