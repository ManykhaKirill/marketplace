import type { ReactNode, MouseEventHandler } from 'react';

export function Button({
    children,
    style,
    action
}: {
    children: ReactNode;
    style?: string;
    action?: (param?: MouseEventHandler<HTMLButtonElement>) => void;
}) {

    return (
        <button className={`flex items-center cursor-pointer ${style}`} onClick={() => action?.()}>
            {children}
        </button>
    )
}