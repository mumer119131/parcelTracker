import { Description } from '@/components/description/postex-description'
import React from 'react'
import FourPxImage from '@/public/images/4px/banner.webp'
import { FourPxMarkdown } from '@/data/markdowns/4px'
import { FourPxSearcher } from '@/components/searchers/4px-searcher'

export const metadata = {
  title: '4PX Tracking | Trackify',
  description: "Track your Leopards parcels easily with Trackify. Enter your tracking number and get the latest status of your shipment.",
}
const Leopards = () => {
  return (
    <div className='px-4 md:px-0'>
        <FourPxSearcher courierName="4PX"/>
        <Description markdown={FourPxMarkdown} headerImage={FourPxImage} headerTitle="4PX"/>
    </div>
  )
}

export default Leopards