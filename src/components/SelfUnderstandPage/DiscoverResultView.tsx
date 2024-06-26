import { useEffect, useState } from 'react';

import axios from 'axios';

import { personaAPI } from '@/apis/personaAPI';
import { NoResultSection } from '@/components/SelfUnderstandPage/NoResultTemplate';
import { DiscoverResultPage } from '@/pages/DiscoverResultPage';
import { userService } from '@/services/UserService';

export const DiscoverResultView = () => {
  const [isTest, setIsTest] = useState(false);

  useEffect(() => {
    const fetchAllKeywords = async () => {
      try {
        await personaAPI.getDiscoverAllKeyword();
        setIsTest(true);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
          setIsTest(false);
        }
      }
    };

    if (userService.getUserState() === 'MEMBER') {
      fetchAllKeywords();
    }
  }, []);

  if (isTest) {
    return <DiscoverResultPage />;
  }

  return <NoResultSection tab="Discover" />;
};
