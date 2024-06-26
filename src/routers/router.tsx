import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/common/Layout/MainLayout';
import { TestLayout } from '@/components/common/Layout/TestLayout';
import { DefineResultPage } from '@/pages/DefineResultPage';
import { DefineStartPage } from '@/pages/DefineStartPage';
import { DefineTestPage1, DefineTestPage2, DefineTestPage3 } from '@/pages/DefineTestPage';
import { DesignResultPage } from '@/pages/DesignResultPage';
import { DesignStartPage } from '@/pages/DesignStartPage';
import {
  DesignTestPage1,
  DesignTestPage2,
  DesignTestPage3,
  DesignTestPage4,
  DesignTestPage5,
} from '@/pages/DesignTestPage';
import { DiscoverResultPage } from '@/pages/DiscoverResultPage';
import { DiscoverStartPage } from '@/pages/DiscoverStartPage';
import { DiscoverTestPage } from '@/pages/DiscoverTestPage';
import { ExperienceDetailPage } from '@/pages/ExperienceDetailPage';
import { ExperienceRecommendPage } from '@/pages/ExperienceRecommendPage';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { MyPage1 } from '@/pages/Mypage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { RedirectPage } from '@/pages/RedirectPage';
import { SelfUnderstandPage } from '@/pages/SelfUnderstandPage';

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/understand" element={<SelfUnderstandPage />} />
        <Route path="/program" element={<ExperienceRecommendPage />} />
        <Route path="/program/:type/:id" element={<ExperienceDetailPage />} />
        <Route path="/mypage" element={<MyPage1 />} />
      </Route>
      <Route path="test" element={<TestLayout />}>
        <Route path="define">
          <Route index element={<Navigate to="1" replace />}></Route>
          <Route path="1" element={<DefineStartPage />} />
          <Route path="2" element={<DefineTestPage1 />} />
          <Route path="3" element={<DefineTestPage2 />} />
          <Route path="4" element={<DefineTestPage3 />} />
          <Route path=":defineId" element={<DefineResultPage />} />
        </Route>
        <Route path="design">
          <Route index element={<Navigate to="1" replace />}></Route>
          <Route path="1" element={<DesignStartPage />} />
          <Route path="2" element={<DesignTestPage1 />} />
          <Route path="3" element={<DesignTestPage2 />} />
          <Route path="4" element={<DesignTestPage3 />} />
          <Route path="5" element={<DesignTestPage4 />} />
          <Route path="6" element={<DesignTestPage5 />} />
          <Route path="result" element={<DesignResultPage />} />
        </Route>
        <Route path="discover">
          <Route path="" element={<DiscoverStartPage />} />
          <Route path="start" element={<DiscoverTestPage />} />
          <Route path="result" element={<DiscoverResultPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<RedirectPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
