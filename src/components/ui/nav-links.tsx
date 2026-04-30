import Link from 'next/link';

export const NavLinks = () => {
    return (
        <Link
            href={'/'}
        >
            <p className='hidden'>{'test'}</p>
        </Link>
    )
}