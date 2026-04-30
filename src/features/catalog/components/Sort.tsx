'use client';
import { type ChangeEvent } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { DATA_SORT } from '@constants/constants';
import { hideFilters } from '@lib/util';

export function Sort() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const isHidden = hideFilters(pathName);
    const { replace } = useRouter();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);
        if(e.target.value == 'reset') {
            params.delete('sortBy');
            params.delete('order');
        }
        else {
            params.set('sortBy', DATA_SORT[value].value.sortBy);
            params.set('order', DATA_SORT[value].value.order);
        }
        replace(`${pathName}?${params.toString()}`);
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
                pr-10
                text-sm
                outline-none
                transition
                hover:bg-neutral-200
                focus:ring-2
                focus:ring-neutral-300
                cursor-pointer
                "
            >
                <option value="reset">Sort by</option>
                <option value={DATA_SORT.priceAsc.name}>Price: ASC</option>
                <option value={DATA_SORT.priceDesc.name}>Price: DESC</option>
                <option value={DATA_SORT.titleAsc.name}>Title: ASC</option>
                <option value={DATA_SORT.titleDesc.name}>Title: Desc</option>
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