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

function SortSkeleton() {
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