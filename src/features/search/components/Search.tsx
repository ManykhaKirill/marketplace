import { Search as SearchIcon } from "lucide-react";
import Form from 'next/form';
import { SearchInput } from './SearchInput';

export function Search() {

    return (
      <Form 
        action="/search" 
        className="
        flex flex-row
        justify-between
        w-full 
        max-w-md
        rounded-full
        bg-neutral-100
        "
        >
        <SearchInput />
        <button
          type="submit"
          className="
            flex
            items-center
            justify-center
            rounded-full
            bg-amber-500
            px-3
            py-1.5
            text-white
            transition
            hover:bg-amber-600
            cursor-pointer
            active:scale-95
          "
        >
          <SearchIcon size={16} />
        </button>
    </Form>
    )
}