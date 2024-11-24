"use client"
import React from 'react'
import { TrackingData } from '@/types/response'
import { AdSenseAdUnit } from '../AdsenseAdUnit'
import { SearchCard } from './searcher-card'
interface PostExSearcherProps {
    courierName?: string
    idName?: string
}

export const PostExSearcher = ({courierName, idName = "Tracking Id"}: PostExSearcherProps) => {
    const [trackingId, setTrackingId] = React.useState('')
    const [error, setError] = React.useState('')
    const [trackingInfo, setTrackingInfo] = React.useState<TrackingData | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setTrackingInfo(null);
    
        try {
          const response = await fetch('/api/track-postex', {
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
          setTrackingInfo(data.data);
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
            <AdSenseAdUnit dataAdSlot="3542902647" dataAdFormat="auto" dataFullWidthResponsive={true} />
            <h1 className="text-2xl font-bold mb-4">{courierName} Tracking</h1>

            <SearchCard courierName={courierName} idName={idName} error={error} trackingId={trackingId} setTrackingId={setTrackingId} handleSubmit={handleSubmit} />
            
            {trackingInfo && (
            <div className="mt-6 px-4 md:px-0">
                <h2 className="text-lg font-bold">Tracking Information</h2>
                <table className="mt-4 w-full border-collapse border border-gray-200">
                    <tbody>
                        <tr>
                            <td className="border border-gray-200 p-2 font-bold">Tracking Number:</td>
                            <td className="border border-gray-200 p-2">{trackingInfo.trackingNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 p-2 font-bold">Customer Name:</td>
                            <td className="border border-gray-200 p-2">{trackingInfo.customerName}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 p-2 font-bold">Status:</td>
                            <td className="border border-gray-200 p-2">{trackingInfo.status}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 p-2 font-bold">Estimated Delivery:</td>
                            <td className="border border-gray-200 p-2">{trackingInfo.estimatedDelivery}</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="text-lg font-bold mt-4">History</h3>
                <table className="mt-2 w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-200 p-2">Date</th>
                            <th className="border border-gray-200 p-2">Location</th>
                            <th className="border border-gray-200 p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trackingInfo.history.map((history, index) => (
                        <tr key={index}>
                            <td className="border border-gray-200 p-2">{new Date(history.date).toLocaleString()}</td>
                            <td className="border border-gray-200 p-2">{history.location}</td>
                            <td className="border border-gray-200 p-2">{history.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}

        </div>
    </div>
  )
}