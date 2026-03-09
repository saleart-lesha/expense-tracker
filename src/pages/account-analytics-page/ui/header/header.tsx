import { useNavigate } from '@tanstack/react-router';
import { MoveLeft } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import classes from './styles.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate({ to: '/' });
  };

  return (
    <div className={classes.header}>
      <Button size="icon" variant="ghost" onClick={handleGoHome}>
        <MoveLeft />
      </Button>
      <p className={classes.headerText}>Аналитика по счетам</p>
    </div>
  );
};
