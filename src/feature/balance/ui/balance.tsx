import classes from './styles.module.scss';

export const Balance = () => {
  // запрос на получение баланса
  return (
    <div className={classes.balance}>
      {/* Полученные данные */}
      <p className={classes.balanceSum}>72221 ₽</p>
      <p className={classes.balanceText}>Баланс</p>
    </div>
  );
};
