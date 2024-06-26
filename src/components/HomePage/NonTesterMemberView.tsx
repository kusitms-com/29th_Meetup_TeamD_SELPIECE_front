import { useState } from 'react';

import styled, { css, useTheme } from 'styled-components';

import { BrandingSection } from '@/components/HomePage/BrandingSection';
import { RecommendSectionTemplate } from '@/components/HomePage/RecommendSectionTemplate';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { SelectAmountModal } from '@/components/common/Modal/SelectAmountModal';
import { IMAGE_KEYWORD_LIST, INTEREST_LIST } from '@/constants/onboarding';
import { useGetBrandingProgramsNonLogin } from '@/hooks/useGetBrandingProgramsNonLogin';
import { useGetUnderstandingPrograms } from '@/hooks/useGetUnderstandingProgram';

export const NonTesterMemberView = () => {
  const theme = useTheme();
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [showAmountModal, setShowAmountModal] = useState<boolean>(false);
  const [selectedProgramForm, setSelectedProgramForm] = useState('온·오프라인');
  const [selectedAmount, setSelectedAmount] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });

  const { data: brandingPrograms } = useGetBrandingProgramsNonLogin(
    selectedInterest,
    selectedKeywords
  );
  const { data: understandingPrograms } = useGetUnderstandingPrograms(
    selectedAmount.min,
    selectedAmount.max,
    selectedProgramForm
  );

  return (
    <>
      {showAmountModal && (
        <SelectAmountModal
          selectedAmount={selectedAmount}
          handleCancel={() => {
            setShowAmountModal(false);
          }}
          handleConfirm={(newSelected) => {
            setSelectedAmount(newSelected);
            setShowAmountModal(false);
          }}
        />
      )}
      <BrandingSection isLoggedIn />
      <RecommendSectionTemplate
        title="나를 더 잘 이해하기 위해"
        subTitle="나를 브랜딩할 수 있는 경험을 추천해드릴게요."
        backgroundColor={theme.color.primary50}
        recommendItems={brandingPrograms}
        refreshHandler={() => {
          setSelectedInterest([]);
          setSelectedKeywords([]);
        }}
      >
        <>
          <Dropdown
            title="분야"
            placeholder="키워드 추가"
            contents={INTEREST_LIST}
            selected={selectedInterest}
            clickContentHandler={(newSelected: string) => {
              if (selectedInterest.includes(newSelected)) {
                setSelectedInterest(selectedInterest.filter((keyword) => keyword !== newSelected));
              } else {
                setSelectedInterest([...selectedInterest, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
          <Dropdown
            title="이미지 키워드"
            placeholder="키워드 추가"
            contents={IMAGE_KEYWORD_LIST}
            selected={selectedKeywords}
            clickContentHandler={(newSelected: string) => {
              if (selectedKeywords.includes(newSelected)) {
                setSelectedKeywords(selectedKeywords.filter((keyword) => keyword !== newSelected));
              } else {
                setSelectedKeywords([...selectedKeywords, newSelected]);
              }
            }}
            width="312px"
            contentMaxHeight="172px"
            multiple
          />
        </>
      </RecommendSectionTemplate>
      <RecommendSectionTemplate
        title="퍼스널브랜딩을 더 잘하고싶다면?"
        subTitle="셀피스는 나를 더 잘 알기위한 프로그램을 추천해요."
        backgroundColor={theme.color.white}
        recommendItems={understandingPrograms}
        refreshHandler={() => {
          setSelectedProgramForm('온·오프라인');
          setSelectedAmount({ min: 0, max: 0 });
        }}
      >
        <>
          <StyledFilterAmount
            onClick={() => {
              setShowAmountModal((prev) => !prev);
            }}
          >
            <span>금액</span>
            <div>
              <span className="amount">{selectedAmount.min}</span>
              <span className="range">~</span>
              <span className="amount">{selectedAmount.max}</span>
              <span className="unit">원</span>
            </div>
          </StyledFilterAmount>
          <Dropdown
            placeholder=""
            contents={['온·오프라인', '온라인', '오프라인']}
            selected={selectedProgramForm}
            clickContentHandler={(newSelected: string) => {
              setSelectedProgramForm(newSelected);
            }}
            width="312px"
          />
        </>
      </RecommendSectionTemplate>
    </>
  );
};

const StyledFilterButton = styled.li<{ $active?: boolean }>`
  display: flex;
  gap: 8px;

  padding: 12px 16px;
  background: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.desktop.body2r};

  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.13);
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.gray100};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.color.primary500};

      svg path {
        fill: ${theme.color.primary500};
      }
    `}
`;

const StyledFilterAmount = styled(StyledFilterButton)`
  width: 312px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    .amount {
      ${({ theme }) => theme.font.desktop.body1m};
      color: ${({ theme }) => theme.color.gray300};
    }

    .range {
      ${({ theme }) => theme.font.desktop.body1b};
      color: ${({ theme }) => theme.color.gray700};
    }

    .unit {
      ${({ theme }) => theme.font.desktop.body2r};
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;
