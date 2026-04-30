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
                    border border-amber-600 
                    rounded-xl
                    m-2 p-2 gap-2
                    bg-amber-500
                    hover:bg-amber-600
                '>
                    <Store 
                        size={22} 
                        className='text-white'
                    />
                    <span className='text-white'>Back to catalog</span>
                </Button>
            </Link>
            ) : (
            <BackButton style='
                border border-amber-600 
                rounded-xl
                m-2 p-2 gap-2
                bg-amber-500
                hover:bg-amber-600
            '>
                <ArrowLeft 
                    size={22} 
                    className='text-white'
                />
                <span className='text-white'>Back to shop</span>
            </BackButton>
            )}
        </div>
    )
}