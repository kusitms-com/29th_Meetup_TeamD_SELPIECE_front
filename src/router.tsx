import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { HomePage } from '@/pages/HomePage';

import { LoginPage } from './pages/LoginPage';
import RedirectPage from './pages/RedirectPage';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<RedirectPage />} />
        <Route path="/users/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
