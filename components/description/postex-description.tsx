import React from 'react'
import { StaticImageData } from 'next/image'
import { Header } from './header'
import { DescriptionRenderer } from './description-render'

interface DescriptionProps {
    markdown: string
    headerImage?: StaticImageData
    headerTitle?: string
}
export const Description = ({markdown, headerImage, headerTitle}: DescriptionProps) => {

  return (
    <div className='container mx-auto'>
        <Header headerImage={headerImage} headerTitle={headerTitle}/>
        <DescriptionRenderer markdown={markdown}/>
    </div>
  )
}
