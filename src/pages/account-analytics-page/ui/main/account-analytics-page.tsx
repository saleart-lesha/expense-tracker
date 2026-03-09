import { Debts } from '../debts/debts';
import { Header } from '../header';
import { SumSection } from '../sum-section/sum-section';

import classes from './styles.module.scss';

export const AccountAnalyticsPage = () => {
  // запрос на получение баланса
  return (
    <div className={classes.accountAnalyticsPage}>
      <Header />
      <SumSection
        title="На выбранных счетах"
        allSum={433363}
        balance={47450}
        minusSum={385913}
        subtitle="* Включенных в расчёт общего баланса"
      />
      <hr />
      <div className={classes.accountAnalyticsPageAllBalance}>
        <SumSection title="На всех счетах" allSum={648169} balance={314192} minusSum={433977} />
        <Debts owedByMe={0} owedToMe={100000} />
      </div>
    </div>
  );
};
