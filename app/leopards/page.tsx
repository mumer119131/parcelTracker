import { Description } from '@/components/description/postex-description'
import React from 'react'
import LeopardsImage from '@/public/images/leopards/banner.webp'
import { LeopardsSearcher } from '@/components/searchers/leopards-searcher'
import { LeopardsMarkdown } from '@/data/markdowns/leopard'

export const metadata = {
  title: 'Leopards Tracking | Trackify',
  description: "Track your Leopards parcels easily with Trackify. Enter your tracking number and get the latest status of your shipment.",
}
const Leopards = () => {
  return (
    <div className='px-4 md:px-0'>
        <LeopardsSearcher courierName="Leopards"/>
        <Description markdown={LeopardsMarkdown} headerImage={LeopardsImage} headerTitle="Leopards"/>
    </div>
  )
}

export default Leopards