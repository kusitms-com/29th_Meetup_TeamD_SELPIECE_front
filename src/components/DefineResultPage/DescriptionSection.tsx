import styled from 'styled-components';

import { PlainChip } from '@/components/common/Chip/PlainChip';
import { DefineResult } from '@/types/test.type';

interface DescriptionSectionProps {
  result: DefineResult;
}

export const DescriptionSection = ({ result }: DescriptionSectionProps) => {
  return (
    <StyledContainer>
      <StyledHollandExplanation>
        <p className="selpiece">
          셀피스의 조각카드는, <span className="highlight">홀랜드 검사</span>를 기반으로
          구성되어있어요 :)
        </p>
        <p className="holland">
          홀랜드 검사는 나의 성격에 적합한 직무의 유형을 파악하는, 직업적 성격 유형 검사랍니다.
        </p>
      </StyledHollandExplanation>
      <StyledDescriptionSection>
        <div className="title">주요 능력</div>
        <p className="description">{result.ability}</p>
      </StyledDescriptionSection>
      <StyledDescriptionSection>
        <div className="title">가치</div>
        <div className="chips">
          {result.values.map((value) => (
            <PlainChip key={value} primary>
              {value}
            </PlainChip>
          ))}
        </div>
      </StyledDescriptionSection>
      <StyledDescriptionSection>
        <div className="title">이런 부분에서 강점을 보여요!</div>
        <p className="description">{result.strength}</p>
      </StyledDescriptionSection>
      <StyledDescriptionSection>
        <div className="title">이러한 특성의 직업을 선호하는 경향이 있어요!</div>
        <p className="description">{result.preference}</p>
      </StyledDescriptionSection>
      <StyledDescriptionSection>
        <div className="title">나의 유형 키워드</div>
        <div className="chips">
          {result.types.map((type) => (
            <PlainChip key={type} primary>
              {type}
            </PlainChip>
          ))}
        </div>
      </StyledDescriptionSection>
      <StyledDescriptionSection>
        <div className="title">내가 선택한 유형 키워드</div>
        <div className="chips">
          {result.define_persona_keywords.map((keyword) => (
            <PlainChip key={keyword} primary>
              {keyword}
            </PlainChip>
          ))}
        </div>
      </StyledDescriptionSection>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 100%;
  padding: 20px 24px;

  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.color.primary50};
  background: ${({ theme }) => theme.color.white};

  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 20px 24px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: 20px 24px;
  }
`;

const StyledHollandExplanation = styled.div`
  padding: 16px;
  width: 100%;
  margin: 0 auto;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.gray150};

  text-align: center;
  color: ${({ theme }) => theme.color.gray700};

  .selpiece {
    ${({ theme }) => theme.font.desktop.body1m};
    margin-bottom: 4px;

    .highlight {
      color: ${({ theme }) => theme.color.secondary500};
    }
  }

  .holland {
    ${({ theme }) => theme.font.desktop.label1r};
  }

  @media ${({ theme }) => theme.device.tablet} {
    .selpiece {
      ${({ theme }) => theme.font.mobile.label1m};
    }

    .holland {
      ${({ theme }) => theme.font.mobile.label2};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .selpiece {
      ${({ theme }) => theme.font.mobile.label1m};
    }

    .holland {
      ${({ theme }) => theme.font.mobile.label2};
    }
  }
`;

const StyledDescriptionSection = styled.div`
  .title {
    ${({ theme }) => theme.font.desktop.body1b};
    color: ${({ theme }) => theme.color.gray900};
    margin-bottom: 8px;
  }

  .description {
    ${({ theme }) => theme.font.desktop.body2m};
    color: ${({ theme }) => theme.color.gray700};
    white-space: pre-wrap;
    word-break: break-all;
  }

  .chips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  @media ${({ theme }) => theme.device.tablet} {
    .title {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    .DescriptionSection {
      ${({ theme }) => theme.font.mobile.label1r};
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .title {
      ${({ theme }) => theme.font.mobile.body1b};
    }

    .DescriptionSection {
      ${({ theme }) => theme.font.mobile.label1r};
    }
  }
`;
