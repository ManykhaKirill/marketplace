import type { ReactNode } from 'react';

export function ContainerGrid({
    children
}: {
    children: ReactNode
}) {

    return (
        <section 
            className='
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-6
            '>
            {children}
        </section>
    )
}