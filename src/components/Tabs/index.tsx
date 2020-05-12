import React, { FC } from "react";
import { Box, Text } from "grommet";
import { PointerBox } from "styles/styles";

interface ITabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab: FC<ITabProps> = ({ label, active, onClick }) => (
  <PointerBox
    margin="medium"
    border={active ? { size: "2px", side: "bottom", color: "red" } : undefined}
    onClick={onClick}
  >
    <Text size="18px" weight={200} margin={{ bottom: "10px" }}>
      {label}
    </Text>
  </PointerBox>
);

interface TabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  values: string[];
}

const Tabs: FC<TabProps> = ({ activeTab, setActiveTab, values }) => {
  return (
    <Box direction="row" justify="around">
      {values.map((tabValue) => (
        <Tab
          key={`tab_${tabValue}`}
          label={tabValue}
          active={activeTab === tabValue}
          onClick={() => setActiveTab(tabValue)}
        />
      ))}
    </Box>
  );
};

export default Tabs;
