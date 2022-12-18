import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/24/outline'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='text-gray-500 text-sm p-5 border-r border-gray-900'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2'>
          <MagnifyingGlassIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2'>
          <BuildingLibraryIcon className='h-5 w-5' />
          <p>Library</p>
        </button>

        <button className='flex items-center space-x-2'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>New playlist</p>
        </button>
        <button className='flex items-center space-x-2'>
          <HeartIcon className='h-5 w-5' />
          <p>Favorites</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'/>
      </div>
    </div>
  )
}

export default Sidebar