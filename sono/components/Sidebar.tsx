import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/24/outline'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='text-gray-500 text-sm p-5 border-r border-gray-900 overflow-y-auto scrollbar-hide h-screen'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <MagnifyingGlassIcon className='h-5 w-5' />
          <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <BuildingLibraryIcon className='h-5 w-5' />
          <p>Library</p>
        </button>

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>New playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Favorites</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900'/>
      </div>
      {/* playlist */}
      <p className=' cursor-pointer hover:text-white'>Playlist name</p>
      <p className=' cursor-pointer hover:text-white'>Playlist name</p>
      <p className=' cursor-pointer hover:text-white'>Playlist name</p>
      <p className=' cursor-pointer hover:text-white'>Playlist name</p>
      <p className=' cursor-pointer hover:text-white'>Playlist name</p>
      <p className=' cursor-pointer hover:text-white'>Playlist name</p>
    </div>
  )
}

export default Sidebar