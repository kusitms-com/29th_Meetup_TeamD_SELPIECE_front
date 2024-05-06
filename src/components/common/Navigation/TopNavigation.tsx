import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as MenuIcon } from '@/assets/icons/menu.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { ReactComponent as MainLogo } from '@/assets/logos/mainLogo.svg';
import { SideNavigation } from '@/components/common/Navigation/SideNavigation';
import { NAVIGATION_MENU } from '@/constants/navigation';

export const TopNavigation = () => {
  const [loggedIn, setLoggedIn] = useState(false); // 로그인 여부를 확인하기 위한 임시 코드
  const [showSideNav, setShowSideNav] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <Link to="/">
        <MainLogo height="36px" />
      </Link>
      <StyledMenuContainer>
        {NAVIGATION_MENU.map((item) => (
          <StyledMenuButton
            key={item.menu}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.menu}
          </StyledMenuButton>
        ))}
        {loggedIn ? (
          <StyledUserButton>
            <UserIcon />
          </StyledUserButton>
        ) : (
          <StyledMenuButton
            $filled
            $width="100px"
            onClick={() => {
              // TODO: 로그인 페이지로 이동하도록 수정
              setLoggedIn((prev) => !prev);
            }}
          >
            로그인
          </StyledMenuButton>
        )}
      </StyledMenuContainer>
      <StyledSideNavButton
        onClick={() => {
          //TODO: 마이페이지로 이동하도록 수정
          setShowSideNav((prev) => !prev);
        }}
      >
        <MenuIcon />
      </StyledSideNavButton>
      {showSideNav && <SideNavigation isLoggedIn={loggedIn} setOpen={setShowSideNav} />}
    </StyledContainer>
  );
};

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  padding: 20px 42px;

  border-bottom: 1px solid ${({ theme }) => theme.color.primary100};
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);

  @media ${({ theme }) => theme.device.mobile} {
    padding: 16px 8px 16px 24px;
    background: ${({ theme }) => theme.color.white};
  }
`;

const StyledMenuContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const StyledSideNavButton = styled.button`
  display: none;
  padding: 0px 12px;

  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;

const StyledUserButton = styled.button`
  padding: 8px;

  border-radius: 8px;
  background: ${({ theme }) => theme.color.primary50};

  path {
    fill: ${({ theme }) => theme.color.primary500};
  }
`;

const StyledMenuButton = styled.button<{ $filled?: boolean; $width?: string }>`
  ${({ theme }) => theme.font.desktop.body2m};

  width: ${({ $width }) => $width};
  padding: 8px 24px;
  border-radius: 8px;

  ${(props) =>
    props.$filled
      ? css`
          color: ${props.theme.color.white};
          background: ${props.theme.color.gray800};

          &:hover {
            background: ${props.theme.color.gray700};
          }
        `
      : css`
          color: ${props.theme.color.gray800};
          background: transparent;

          &:hover {
            color: ${props.theme.color.primary600};
          }
        `}
`;