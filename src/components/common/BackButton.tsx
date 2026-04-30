'use client';
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

export function BackButton({
    children,
    style
}:{
    children: ReactNode;
    style?: string;
}) {
    const { back } = useRouter();

    return (
        <Button style={style} action={() => back()}>
            {children}
        </Button>
    )
}