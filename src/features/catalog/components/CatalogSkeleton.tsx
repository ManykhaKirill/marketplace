import { Container } from '@components/ui/container';
import { ContainerGrid } from '@components/ui/container-grid';

export function CatalogSkeleton() {
    return (
            <ContainerGrid>
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="
                            bg-white
                            rounded-xl
                            overflow-hidden
                            animate-pulse
                        "
                        >
                        <div className="aspect-square bg-neutral-200" />

                        <div className="p-4 space-y-3">
                            <div className="h-4 w-3/4 bg-neutral-200 rounded" />
                            <div className="h-4 w-1/2 bg-neutral-200 rounded" />
                            <div className="h-5 w-1/3 bg-neutral-300 rounded mt-2" />
                        </div>
                        </div>
                ))}
            </ContainerGrid>
    )
}

export function FilterSkeleton() {
    return (
        <div className="
            relative 
            rounded-full
            bg-neutral-200
            animate-pulse
            min-h-9
            min-w-42
            "
        />
    )
}

export function SortSkeleton() {
    return (
        <div className='
            rounded-full
            bg-neutral-200
            animate-pulse
            min-h-9
            min-w-32
            '
        />
    )
}

export function PaginationSkeleton() {
    return (
    <div className='flex flex-row justify-center items-center gap-2 mt-4'>
        <div className="flex flex-row gap-2">
            <div className='px-4 py-2 h-9 rounded-lg transition bg-neutral-200 animate-pulse' />
            <div className='px-4 py-2 h-9 rounded-lg transition bg-neutral-200 animate-pulse' />
            <div className='px-4 py-2 h-9 rounded-lg transition bg-neutral-200 animate-pulse' />
        </div>
    </div>
    )
}