import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { authService } from '@/services/AuthService';
import { userService } from '@/services/UserService';

export const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const nickname = params.get('nickname');
    const isTest = params.get('is_test');
    const accessToken = params.get('access_token');
    const registerToken = params.get('register_token');

    if (registerToken) {
      authService.setAuthToken(registerToken);
      authService.setRegisterToken(registerToken);
      userService.setUser({ nickname: '', is_test: false });
      navigate('/onboarding');
    }

    if (accessToken) {
      authService.setAuthToken(accessToken);
      nickname && userService.setUser({ nickname, is_test: isTest === 'T' ? true : false });
      navigate('/');
    }
    // TODO: warning 해결
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
