import { Balance } from '@/feature/balance';
import { HeaderContainer } from '@/feature/header';

export const AccountPage = () => {
  return (
    <div>
      <HeaderContainer
        children={
          <div>
            <Balance />
          </div>
        }
      />
    </div>
  );
};
