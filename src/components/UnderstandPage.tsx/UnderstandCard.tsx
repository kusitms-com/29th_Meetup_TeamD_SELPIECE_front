import React from 'react';

import styled from 'styled-components';

import { theme } from '@/styles';

interface OutlineProps {
  title: string;
  titleTextSize: boolean;
  subtitle: string;
  subtitleTextSize: boolean;
  footerText: string;
  footerTextSize?: boolean;
  titleColor: string;
  subtitleColor: string;
  footerTextColor: string;
  backgroundColor: string;
}

const Container = styled.div<{ backgroundColor: string; width?: string; height?: string }>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  padding: 24px;
  box-shadow: 0px 0px 10px rgba(87, 11, 255, 0.15);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: ${(props) => props.backgroundColor};
`;

const Header = styled.div`
  align-self: stretch;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`;

const Title = styled.div<{ $color: string; $titleTextSize?: boolean }>`
  color: ${(props) => props.$color};
  ${({ theme, $titleTextSize }) =>
    $titleTextSize ? theme.font.desktop.h2 : theme.font.desktop.title1};
`;

const Subtitle = styled.div<{ $color: string; $subtitleTextSize?: boolean }>`
  color: ${(props) => props.$color};
  ${({ theme, $subtitleTextSize }) =>
    $subtitleTextSize ? theme.font.desktop.title2 : theme.font.desktop.body1m};
`;

const FooterText = styled.div<{ $color: string; $footerTextSize?: boolean }>`
  color: ${(props) => props.$color};
  ${({ theme, $footerTextSize }) =>
    $footerTextSize ? theme.font.desktop.label1m : theme.font.desktop.label1m};
`;

const Outline = ({
  title,
  titleTextSize,
  subtitle,
  subtitleTextSize,
  footerText,
  footerTextSize,
  titleColor,
  subtitleColor,
  footerTextColor,
  backgroundColor,
  width,
  height,
}: OutlineProps & { width?: string; height?: string }) => (
  <Container backgroundColor={backgroundColor} width={width} height={height}>
    <Header>
      <Title $color={titleColor} $titleTextSize={titleTextSize}>
        {title}
      </Title>
      <Subtitle $color={subtitleColor} $subtitleTextSize={subtitleTextSize}>
        {subtitle}
      </Subtitle>
    </Header>
    <FooterText $color={footerTextColor} $footerTextSize={footerTextSize}>
      {footerText}
    </FooterText>
  </Container>
);

const DesignComponent = () => (
  <Outline
    title="Design"
    subtitle="설계하기"
    footerText="앞으로의 나를 브랜딩하고 싶다면?"
    titleColor={theme.color.white}
    subtitleColor={theme.color.white}
    footerTextColor={theme.color.white}
    backgroundColor="#915AFB"
    titleTextSize={false}
    subtitleTextSize={false}
    footerTextSize={false}
    width="331.5px"
    height="210px"
  />
);

const DefineComponent = () => (
  <Outline
    title="Define"
    subtitle="정의하기"
    footerText="현재의 나를 파악하고 싶다면?"
    titleColor={theme.color.primary500}
    subtitleColor={theme.color.gray800}
    footerTextColor={theme.color.primary800}
    backgroundColor="#FFFFF"
    titleTextSize={false}
    subtitleTextSize={false}
    footerTextSize={false}
    width="331.5px"
    height="210px"
  />
);

const DiscoverComponent = () => (
  <Outline
    title="Discover"
    subtitle="돌아보기"
    footerText="셀피스를 만나기 전의 나를 알고 싶다면?"
    titleColor={theme.color.primary500}
    subtitleColor={theme.color.gray800}
    footerTextColor={theme.color.primary800}
    backgroundColor="#FFFFF"
    titleTextSize={true}
    subtitleTextSize={true}
    footerTextSize={true}
    width="683px"
    height="246px"
  />
);

export { DesignComponent, DefineComponent, DiscoverComponent };
