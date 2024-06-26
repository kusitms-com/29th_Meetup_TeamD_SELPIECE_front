import { useState, ReactNode } from 'react';

import styled from 'styled-components';

const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 24px;
  padding-right: 64px;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 4px #f7f7f7 solid;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const Tab = styled.div<{ $isActive: boolean }>`
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  border-bottom: ${({ $isActive }) => ($isActive ? '4px #915AFB solid' : 'none')};
  cursor: pointer;

  & > div {
    color: ${({ $isActive }) => ($isActive ? '#915AFB' : '#8B8B8B')};
    ${({ theme }) => theme.font.desktop.body1m};
    word-wrap: break-word;
  }
`;

const TabPanel = styled.div<{ $hidden: boolean }>`
  padding-bottom: 0px;
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};
`;

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export const MyPageTab = ({ tabs }: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <Container>
        <TabContainer>
          {tabs.map((tab, index) => (
            <Tab key={tab.id} $isActive={value === index} onClick={() => handleChange(index)}>
              <div>{tab.label}</div>
            </Tab>
          ))}
        </TabContainer>
      </Container>
      <div>
        {tabs.map((tab, index) => (
          <TabPanel key={tab.id} $hidden={value !== index}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
