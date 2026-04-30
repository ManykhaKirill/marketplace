'use client';
import { usePathname } from 'next/navigation';
import { generateBreadCrumbs, hideBreadCrumbs } from '@lib/util';
import { CircleArrowLeft } from "lucide-react";
import { BackButton } from '../common/BackButton';

export function BreadCrumbs({
    productName
}: {
    productName?: string
}) {
    const pathName = usePathname();
    const path = generateBreadCrumbs(pathName);
    const isHidden = hideBreadCrumbs(pathName);

    return (
        <div className={isHidden ? 'hidden' : 'flex flex-row items-center lg:text-2xl'}>
            <BackButton>
                <CircleArrowLeft size={22} />
            </BackButton> 
            <span className="px-2">/</span>
            <span>{path}</span>
        </div>
    )

}