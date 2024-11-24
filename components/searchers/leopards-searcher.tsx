"use client"
import React from 'react'
import type { LeopardsData } from '@/types/response'
import { AdSenseAdUnit } from '../AdsenseAdUnit'
import { SearchCard } from './searcher-card'
interface PostExSearcherProps {
    courierName?: string
    idName?: string
}

export const LeopardsSearcher = ({courierName, idName = "Tracking Id"}: PostExSearcherProps) => {
    const [trackingId, setTrackingId] = React.useState('')
    const [error, setError] = React.useState('')
    const [trackingInfo, setTrackingInfo] = React.useState<LeopardsData | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setTrackingInfo(null);
    
        try {
          const response = await fetch('/api/track-leopards', {
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
            <AdSenseAdUnit dataAdSlot="1646171504" dataAdFormat="auto" dataFullWidthResponsive={true} />
            <h1 className="text-2xl font-bold mb-4">{courierName} Tracking</h1>

            <SearchCard courierName={courierName} idName={idName} error={error} trackingId={trackingId} setTrackingId={setTrackingId} handleSubmit={handleSubmit} />
            
            {trackingInfo && (
              <div className="mt-6 px-4 md:px-0">
                <h2 className="text-lg font-bold">Tracking Information</h2>
                <table className="mt-4 w-full border-collapse border border-gray-200">
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Consignment No:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.consignmentNo}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Current Status:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.currentStatus}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Status Date:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.currentStatusDate}</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="text-lg font-bold mt-4">Shipment Details</h3>
                <table className="mt-2 w-full border-collapse border border-gray-200">
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Origin:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.shipmentDetails.origin}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Destination:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.shipmentDetails.destination}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Booking Date:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.shipmentDetails.bookingDate}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Pieces:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.shipmentDetails.pieces}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Weight:</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.shipmentDetails.weight}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Consignee :</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.consignee}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Shipper :</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.shipper}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2 font-bold">Reference No. :</td>
                      <td className="border border-gray-200 p-2">{trackingInfo.reference_no}</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className="text-lg font-bold mt-4">Tracking Information</h3>
                <table className="mt-2 w-full border-collapse border border-gray-200">
                  <tbody>
                    <tr>
                        <td className="border border-gray-200 p-2"><strong>Date</strong></td>
                        <td className="border border-gray-200 p-2"><strong>Status</strong></td>
                    </tr>
                    {trackingInfo.trackingInformation.map((info, index) => (
                      <tr key={index}>
                        <td className="border border-gray-200 p-2">{info.date}</td>
                        <td className="border border-gray-200 p-2">{info.content}</td>
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