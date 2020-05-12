import React, { FC } from "react";
import { SidebarContainer, StyledText } from "./styles";

interface IProps {
  hidden?: boolean;
}

const Sidebar: FC<IProps> = ({ hidden }) => (
  <SidebarContainer className={hidden ? "" : "open"}>
    <StyledText>Text</StyledText>
  </SidebarContainer>
);

export default Sidebar;
