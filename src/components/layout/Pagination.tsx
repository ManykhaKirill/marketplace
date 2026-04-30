'use client';

import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LIMIT } from '@constants/constants';
import { generatePagination } from '@lib/util';

export function Pagination({
    total,
}: {
    total: number
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const totalPages = Math.ceil(total / LIMIT);

    function createPageURL(pageNumber: number | string) {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    }

  const allPages = generatePagination(currentPage,totalPages);

  return (
    <div className={totalPages > 1 ? 'flex flex-row justify-center items-center gap-2 mt-4' : 'hidden'}>
      <PaginationArrow href={createPageURL(currentPage - 1)} direction='left' isDisabled={currentPage <= 1} />
      <div className="flex flex-row gap-2">
        {allPages.map((p, index) => (
            <Link
              key={p}
              href={createPageURL(p)}
              className={`
                px-4 py-2 rounded-lg border text-sm
                transition
                ${
                  p === currentPage
                    ? "bg-black text-white"
                    : "bg-white hover:bg-neutral-100"
                }
              `}
            >
              {p}
            </Link>
          )
        )}
      </div>
      <PaginationArrow href={createPageURL(currentPage + 1)} direction='right' isDisabled={currentPage >= totalPages} />
      </div>
    )
}

function PaginationArrow({
  href,
  direction,
  isDisabled
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled: boolean;
}) {
  const icon = direction === 'left' ? (
    <ArrowLeft size={18} />
  ) : (
    <ArrowRight size={18} />
  )

    return isDisabled ? (
        <></>
          ) : (
        <Link href={href}>
            {icon}
        </Link>
      )
}