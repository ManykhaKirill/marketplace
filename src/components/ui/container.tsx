import type { ReactNode } from 'react';

export function Container({ children }: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col mx-auto w-full h-full max-w-450 px-4 py-2 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}