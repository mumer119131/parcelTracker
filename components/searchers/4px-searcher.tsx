"use client"
import React from 'react'
import type { FourPXData } from '@/types/response'
import { AdSenseAdUnit } from '../AdsenseAdUnit'
import { SearchCard } from './searcher-card'
interface PostExSearcherProps {
    courierName?: string
    idName?: string
}

export const FourPxSearcher = ({courierName, idName = "Tracking Id"}: PostExSearcherProps) => {
    const [trackingId, setTrackingId] = React.useState('')
    const [error, setError] = React.useState('')
    const [trackingInfo, setTrackingInfo] = React.useState<FourPXData | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setTrackingInfo(null);
    
        try {
          const response = await fetch('/api/track-4px', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ trackingId }),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Something went wrong');
          }
          
          const data = await response.json();
          console.log(data)
          setTrackingInfo(data.data.data);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        }
      };
  return (
    <div className='flex justify-center'>
        <div className='container flex justify-center flex-col items-center py-10'>
            <AdSenseAdUnit dataAdSlot="1646171504" dataAdFormat="auto" dataFullWidthResponsive={true} />
            <h1 className="text-2xl font-bold mb-4">{courierName} Tracking</h1>

            <SearchCard courierName={courierName} idName={idName} error={error} trackingId={trackingId} setTrackingId={setTrackingId} handleSubmit={handleSubmit} />
            
            
            {trackingInfo && (
              <div className="mt-6 px-4 md:px-0">
                <h2 className="text-lg font-bold">Tracking Information</h2>
                <div className="overflow-x-auto">
                  <table className="mt-4 w-full border-collapse border border-gray-200">
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">Start Code:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.ctStartCode}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">End Code:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.ctEndCode}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">Start Name:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.ctStartName}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">End Name:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.ctEndName}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">Status:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.status}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">Shipper Code:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.shipperCode}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">Tracking No:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.trackingNo}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-2 font-bold">Multi Package:</td>
                        <td className="border border-gray-200 p-2">{trackingInfo.multiPackage ? 'Yes' : 'No'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-lg font-bold mt-4">Tracking History</h3>
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full border-collapse border border-gray-200">
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-2"><strong>Date</strong></td>
                        <td className="border border-gray-200 p-2"><strong>Description</strong></td>
                        <td className="border border-gray-200 p-2"><strong>Location</strong></td>
                        <td className="border border-gray-200 p-2"><strong>Status</strong></td>
                      </tr>
                      {trackingInfo.tracks.map((track, index) => (
                        <tr key={index}>
                          <td className="border border-gray-200 p-2">{track.tkDateStr}</td>
                          <td className="border border-gray-200 p-2">{track.tkDesc}</td>
                          <td className="border border-gray-200 p-2">{track.tkLocation}</td>
                          <td className="border border-gray-200 p-2">{track.tkCategoryName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

        </div>
    </div>
  )
}