import React, { FC } from "react";
import { SidebarContainer, StyledText } from "./styles";

interface IProps {
  show?: boolean;
}

const Sidebar: FC<IProps> = ({ show }) => (
  <SidebarContainer className={show ? "open" : ""}>
    <StyledText>Text</StyledText>
  </SidebarContainer>
);

export default Sidebar;
