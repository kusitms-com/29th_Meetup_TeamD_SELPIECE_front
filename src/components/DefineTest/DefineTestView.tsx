import styled from 'styled-components';

import { SectionContainer } from '@/styles';

import { DefineChips1, DefineChips2, DefineChips3 } from './DefineChip';
import { DefineTextView1, DefineTextView2, DefineTextView3 } from './DefineTextView';

const StyledSectionContainer = styled(SectionContainer)`
  padding: 64px;
  padding-top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  overflow: hidden;

  width: 100vw;
`;

const StyledContainer = styled.section`
  background: ${({ theme }) => `${theme.color.primary50}`};
  width: 100vw;
`;

const Container = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 52px;
  display: inline-flex;
  width: 632px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 552px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;

export const DefineTestView1 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DefineTextView1 />
            <DefineChips1 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DefineTestView2 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DefineTextView2 />
            <DefineChips2 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};

export const DefineTestView3 = () => {
  return (
    <>
      <StyledContainer>
        <StyledSectionContainer>
          <Container>
            <DefineTextView3 />
            <DefineChips3 />
          </Container>
        </StyledSectionContainer>
      </StyledContainer>
    </>
  );
};