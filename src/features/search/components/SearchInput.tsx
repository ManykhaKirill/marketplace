'use client';
import { X } from 'lucide-react';
import { useState, type ChangeEvent } from 'react';

export function SearchInput() {
    const [value, setValue] = useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function handleInputClear(){
        setValue('');
    }

    return (
        <label className='
        flex 
        flex-row
        flex-1
        px-2
        items-center 
        focus:bg-white
        focus:ring-2
         focus:ring-neutral-300'>
            <input
                value={value}
                onChange={(e) => handleChange(e)}
                name="query"
                placeholder="Search products..."
                className="
                    w-full
                    rounded-full
                    bg-neutral-100
                    px-4
                    pr-12
                    py-2
                    text-sm
                    outline-none
                    transition
                    
                "
            />
            {value ? (
                <X
                    className='cursor-pointer text-amber-500 hover:text-amber-600'
                    onClick={handleInputClear} 
                    size={22}  
                />
                ) : null}
        </label>
    )
}