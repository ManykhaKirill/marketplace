'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({
    id,
    images,
    alt,
    autoSlide = false,
    autoSlideInterval = 3000,
}: {
    id: number;
    images: string[];
    alt: string;
    autoSlide?: boolean;
    autoSlideInterval?: number;
}) {
    const [slide, setSlide] = useState<number>(0);
    const singlePic = images.length === 1;

    function nextPhoto() {
        setSlide((slide) => slide === images.length - 1 ? 0 : slide + 1);
    }

    function previousPhoto() {
        setSlide((slide) => slide === 0 ? images.length - 1 : slide - 1);
    }

    useEffect(() => {
        if(!autoSlide || singlePic) return;
        const interval = setInterval(nextPhoto, autoSlideInterval);
        return () => clearInterval(interval);
    },[])

    return (
        <div className='
            relative aspect-square
            border border-gray-200 
            rounded-2xl 
            bg-neutral-100
            z-0
            h-96
            lg:h-120  
        '>
            <button 
                className={`flex ${singlePic ? 'hidden' : 'absolute'} top-1/2 left-0 justify-center items-center cursor-pointer z-1`}
                onClick={previousPhoto}
            >
                <ChevronLeft />
            </button>
            <Image 
                src={images[slide]}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                "
            />
            <button 
                className={`flex ${singlePic ? 'hidden' : 'absolute'} top-1/2 right-0 justify-center items-center cursor-pointer z-1`}
                onClick={nextPhoto}
            >
                <ChevronRight />
            </button>
        </div>
    )
}