import type { ReactNode } from 'react';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background flex min-h-dvh justify-center">
      <div className="w-full max-w-120 px-4">{children}</div>
    </div>
  );
};
