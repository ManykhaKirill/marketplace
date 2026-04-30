'use client'
import type { ChangeEvent } from 'react'
import { useRouter, usePathname, useSearchParams  } from 'next/navigation';
import { hideFilters } from '@lib/util';

export function CategorySelect({ categories }: {
    categories: string[]
}) {
  const { push, replace } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const isHidden =  hideFilters(pathName);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'all') {
      push('/');
    } 
    else {
      replace(`/category/${value}`);
    }
  }

  return (
    <div className={isHidden ? 'hidden' : 'relative'}>
      <select
        onChange={handleChange}
        className="
          appearance-none
          rounded-full
          bg-neutral-100
          px-4
          py-2
          lg:pr-10
          text-sm
          outline-none
          transition
          hover:bg-neutral-200
          focus:ring-2
          focus:ring-neutral-300
          cursor-pointer
        "
      >
        <option value="all">All categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <span
        className="
          pointer-events-none
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          text-neutral-500
        "
      >
        ▾
      </span>
    </div>
  )
}