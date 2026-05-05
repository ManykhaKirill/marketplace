import Link from 'next/link';
import { Store, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { BackButton } from '../common/BackButton';

export function EmptyResult({
    categoryName,
    toMain
}: {
    categoryName?: string;
    toMain?: boolean;
}) {
    return (
        <div className='flex flex-col justify-center items-center lg:h-96 h-68'>
         <span className='text-2xl'>{categoryName ? `${categoryName} is empty`: `Category is empty`}</span>
         {toMain ? (
            <Link href='/'>
                <Button style='
                    rounded-xl
                    m-2 p-3 gap-1
                    bg-neutral-100
                    hover:bg-amber-500
                '>
                    <Store 
                        size={20} 
                    />
                    <span>Back to catalog</span>
                </Button>
            </Link>
            ) : (
            <BackButton style='  
                rounded-xl
                m-2 p-3 gap-1
                bg-neutral-100
                hover:bg-amber-500
            '>
                <ArrowLeft 
                    size={20} 
                    
                />
                <span>Back to shop</span>
            </BackButton>
            )}
        </div>
    )
}