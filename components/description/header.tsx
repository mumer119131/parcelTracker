import React from 'react'
import { StaticImageData } from 'next/image';
interface HeaderProps {
  headerImage?: StaticImageData
  headerTitle?: string
}
export const Header = ({headerImage, headerTitle}:HeaderProps) => {
  return (
    <div style={{ backgroundImage: `url(${headerImage?.src})` }} className='bg-cover h-96 relative flex items-center justify-center bg-center'>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <h1 className='text-white text-[5rem] tracking-wide poppins-bold uppercase'>{headerTitle}</h1>
      </div>
    </div>
  )
}
