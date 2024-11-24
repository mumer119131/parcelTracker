"use client"

import React, { useEffect } from 'react'
type AdSenseAdUnitProps = {
    dataAdSlot: string;
    dataAdFormat: string;
    dataFullWidthResponsive: boolean;
  };

  const pId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? "";
export const AdSenseAdUnit = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }: AdSenseAdUnitProps) => {
    useEffect(() => {
        try {
          ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push(
            {}
          );
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.log(error.message);
          } else {
            console.log(String(error));
          }
        }
    }, []);
    return (
      <div className="w-full md:w-1/2 xl:w-1/3">

        <ins className="adsbygoogle"
        style={{display: "block"}}
        data-ad-client={`ca-pub-${pId}`}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}></ins>
   
     </div>
     
  )
}
