import cn from 'classnames';

import classes from './styles.module.scss';

import type { SumSectionProps } from './types';
import type { FC } from 'react';

export const SumSection: FC<SumSectionProps> = ({ allSum, balance, minusSum, title, subtitle }) => {
  return (
    <div className={classes.sumSection}>
      <div className={classes.sumSectionHeader}>
        <p className={classes.sumSectionHeaderTitle}>{title}</p>
        {subtitle && <p className={classes.sumSectionHeaderSubtitle}>{subtitle}</p>}
      </div>
      <div className={classes.sumSectionNumbers}>
        <div className={classes.sumSectionNumbersItem}>
          <p className={classes.sumSectionNumbersItemValue}>{allSum}</p>
          <p className={classes.sumSectionNumbersItemLabel}>У меня есть на счетах</p>
        </div>
        <div className={classes.sumSectionNumbersItem}>
          <p
            className={cn(classes.sumSectionNumbersItemValue, {
              [classes.sumSectionNumbersItemValueNegative]: minusSum,
            })}
          >
            {minusSum}
          </p>
          <p className={classes.sumSectionNumbersItemLabel}>Минус на счетах</p>
        </div>
        <div className={classes.sumSectionNumbersItem}>
          <p className={classes.sumSectionNumbersItemValue}>{balance}</p>
          <p className={classes.sumSectionNumbersItemLabel}>Баланс</p>
        </div>
      </div>
    </div>
  );
};
