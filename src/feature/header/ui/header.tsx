import classes from './styles.module.scss';

import type { HeaderContainerProps } from '../model';
import type { FC } from 'react';

export const HeaderContainer: FC<HeaderContainerProps> = ({ children }) => {
  return <div className={classes.headerContainer}>{children}</div>;
};
