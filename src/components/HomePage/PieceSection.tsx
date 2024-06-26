import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '@/assets/icons/arrowDown.svg';
import { PlainChip } from '@/components/common/Chip/PlainChip';
import { CARD_IMAGE } from '@/constants/card';
import { PERSONA } from '@/constants/persona';
import { userService } from '@/services/UserService';
import { SectionContainer, moveDown, moveLeft, moveRight, moveUp } from '@/styles';
import { DefineResult } from '@/types/test.type';

interface PieceSectionProps {
  defineInformation: DefineResult | undefined;
}

export const PieceSection = ({ defineInformation }: PieceSectionProps) => {
  if (defineInformation)
    return (
      <StyledContainer>
        <StyledSectionContainer>
          <StyledTitle>
            <div className="title">
              <span className="highlight">{PERSONA[defineInformation.name] || ''} 조각</span>을 가진{' '}
              <span className="highlight">{userService.getUserNickname()}</span>님,
            </div>
            <div className="subtitle">셀피스와 함께 나를 브랜딩해봐요.</div>
          </StyledTitle>
          <StyledCardContainer>
            <img
              src={
                CARD_IMAGE.find((card) => card.name === defineInformation.name.toLowerCase())?.[
                  'front'
                ] || ''
              }
              alt="card"
            />
            {defineInformation.define_persona_keywords.map((keyword, index) => (
              <StyledBubble key={keyword} className={`b${index}`} $weight={1 - 0.1 * index}>
                <span>{keyword}</span>
              </StyledBubble>
            ))}
          </StyledCardContainer>
          <StyledContents>
            <div className="chips">
              {defineInformation.define_persona_keywords.map((keyword) => (
                <PlainChip key={keyword} primary>
                  {keyword}
                </PlainChip>
              ))}
            </div>
            <div>
              키워드를 가진 <span className="highlight">{userService.getUserNickname()}</span>님께
              <br />
              이런 경험을 추천드리고 싶어요.
            </div>
            <ArrowIcon width="48px" />
          </StyledContents>
        </StyledSectionContainer>
      </StyledContainer>
    );
};

const StyledContainer = styled.section`
  background: ${({ theme }) => `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 27%,
      rgba(232, 221, 254, 0.45) 65%,
      ${theme.color.primary200} 100%
    ),
    ${theme.color.white}`};

  .highlight {
    color: ${({ theme }) => theme.color.primary600};
  }
`;

const StyledSectionContainer = styled(SectionContainer)`
  padding: 64px;
  padding-top: 140px;

  text-align: center;
`;

const StyledTitle = styled.div`
  .title {
    margin-bottom: 16px;

    ${({ theme }) => theme.font.desktop.h1};
    color: ${({ theme }) => theme.color.black};
  }

  .subtitle {
    ${({ theme }) => theme.font.desktop.title2};
    color: ${({ theme }) => theme.color.gray600};
  }
`;

const StyledCardContainer = styled.div`
  width: 100%;

  position: relative;
  z-index: 0;

  img {
    height: 440px;
    margin: 56px 0;
    border-radius: 13px;
  }
`;

const StyledBubble = styled.div<{ $weight: number }>`
  width: ${({ $weight }) => $weight * 360}px;
  height: ${({ $weight }) => $weight * 360}px;

  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;

  color: ${({ theme }) => theme.color.primary800};
  ${({ theme }) => theme.font.desktop.title1};

  position: absolute;
  z-index: -1;

  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0) 76%,
    rgba(204, 179, 253, 0.4) 100%
  );

  box-shadow:
    -0.319px 51.263px 151.773px 0px rgba(48, 13, 115, 0.12),
    -0.04px 6.444px 21.116px 0px rgba(48, 13, 115, 0.06);

  &.b0 {
    bottom: 5%;
    left: 15%;

    animation:
      ${moveDown} 2000ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b1 {
    bottom: 10%;
    right: 13%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2000ms ease-in-out infinite;
  }

  &.b2 {
    top: 2%;
    left: 3%;

    animation:
      ${moveUp} 2500ms ease-in-out infinite,
      ${moveLeft} 3000ms ease-in-out infinite;
  }

  &.b3 {
    top: 5%;
    right: 3%;

    animation:
      ${moveUp} 2300ms ease-in-out infinite,
      ${moveLeft} 2700ms ease-in-out infinite;
  }

  &.b4 {
    bottom: 10%;
    right: 0%;

    animation:
      ${moveDown} 2500ms ease-in-out infinite,
      ${moveRight} 2300ms ease-in-out infinite;
  }

  &.b5 {
    bottom: 10%;
    left: 0%;

    animation:
      ${moveUp} 2600ms ease-in-out infinite,
      ${moveRight} 3000ms ease-in-out infinite;
  }

  &.b6 {
    top: 3%;
    right: 24%;

    animation:
      ${moveDown} 3000ms ease-in-out infinite,
      ${moveRight} 2800ms ease-in-out infinite;
  }
`;

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding-top: 30px;

  ${({ theme }) => theme.font.desktop.body1b};
  color: ${({ theme }) => theme.color.gray800};

  .chips {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    padding-bottom: 30px;
  }
`;
