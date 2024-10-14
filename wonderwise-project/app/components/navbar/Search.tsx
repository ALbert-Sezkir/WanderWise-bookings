'use client';

const Search = () => {
return ( 
<div
className='border-[1px] wfull md:w-auto py-2 rounded-full shdow-sm hover:shodow-md transition cursor-pointer'> 

 <div 
className='flex flex-row items-center justify-between'>

  <div 
  className=' text-sm font-semibold px-6 '> Anywhere


  </div>
  <div 
  className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center '> Any Week


  </div>
 </div>
</div>

);
}

export default Search;