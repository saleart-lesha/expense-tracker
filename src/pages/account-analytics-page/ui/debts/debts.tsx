import cn from 'classnames';

import classes from './styles.module.scss';

import type { DebtsProps } from './types';
import type { FC } from 'react';

export const Debts: FC<DebtsProps> = ({ owedByMe, owedToMe }) => {
  return (
    <div className={classes.debts}>
      <p className={classes.debtsTitle}>Долги</p>
      <div className={classes.debtsItem}>
        <p
          className={cn(classes.debtsItemValue, {
            [classes.debtsItemValueNegative]: owedByMe,
          })}
        >
          {owedByMe}
        </p>
        <p className={classes.debtsItemLabel}>Я должен</p>
      </div>
      <div className={classes.debtsItem}>
        <p className={classes.debtsItemValue}>{owedToMe}</p>
        <p className={classes.debtsItemLabel}>Мне должны</p>
      </div>
    </div>
  );
};
