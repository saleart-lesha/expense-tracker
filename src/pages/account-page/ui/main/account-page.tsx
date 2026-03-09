import { useNavigate } from '@tanstack/react-router';
import { ChartPie } from 'lucide-react';

import { Balance } from '@/feature/balance';
import { HeaderContainer } from '@/feature/header';

import classes from './styles.module.scss';

export const AccountPage = () => {
  const navigate = useNavigate();

  const handleGoToAnalyticsPage = () => {
    navigate({ to: '/account-analytics' });
  };

  return (
    <div>
      <HeaderContainer
        children={
          <div className={classes.accountPageHeader}>
            <Balance />
            <ChartPie
              className={classes.accountPageHeaderButton}
              onClick={handleGoToAnalyticsPage}
              size={20}
            />
          </div>
        }
      />
    </div>
  );
};
