"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { TrackingData } from '@/types/response'

const PostExSearch = () => {
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
            <h1 className="text-2xl font-bold mb-4">PostEx Tracking</h1>
            <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Track the PostEx Parcels</CardTitle>
                <CardDescription>Enter Your PostEx parcel tracking ID down to track it.s</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className=''>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Tracking Id</Label>
                        <Input id="trackingId" placeholder="Tracking Id #" value={trackingId} onChange={(e)=> { setTrackingId(e.target.value) }} />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between p-0 py-4 pb-2">
                        <Button variant="outline" type="reset">Reset</Button>
                        <Button type="submit">Search</Button>
                    </CardFooter>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </CardContent>
            </Card>

            
            
            {trackingInfo && (
            <div className="mt-6">
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
                            <td className="border border-gray-200 p-2">{history.date}</td>
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

export default PostExSearch