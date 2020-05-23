import React, { FC } from "react";
import { Box, Text } from "react-basic-blocks";

interface ITabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab: FC<ITabProps> = ({ label, active, onClick }) => (
  <Box
    margin="medium"
    borderBottom={active ? "2px solid red" : undefined}
    onClick={onClick}
    cursor="pointer"
  >
    <Text fontSize="18px" fontWeight={200} margin="0 0 10px 0">
      {label}
    </Text>
  </Box>
);

interface TabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  values: string[];
}

const Tabs: FC<TabProps> = ({ activeTab, setActiveTab, values }) => {
  return (
    <Box flexDirection="row" justifyContent="space-around">
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
