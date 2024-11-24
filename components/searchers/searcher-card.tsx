import React, { useRef } from 'react'
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

interface SearchCardProps {
    courierName?: string
    idName?: string
    error?: string
    trackingId: string
    setTrackingId: (trackingId: string) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
export const SearchCard = ({courierName, idName, error, trackingId, setTrackingId, handleSubmit}: SearchCardProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleReset = () => {
        setTrackingId('')
        inputRef.current?.focus()
    }
    return (
    <>
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Track the {courierName} Parcels</CardTitle>
                <CardDescription>Enter Your {courierName} parcel {idName} down to track it.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className=''>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Tracking Id</Label>
                        <Input id="trackingId" placeholder={`${idName} #`} value={trackingId} onChange={(e)=> { setTrackingId(e.target.value) }} required min="3" ref={inputRef}/>
                        </div>
                    </div>
                    <CardFooter className="flex justify-between p-0 py-4 pb-2">
                        <Button variant="outline" type="reset" onClick={handleReset}>Reset</Button>
                        <Button type="submit">Search</Button>
                    </CardFooter>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </CardContent>
        </Card>
    </>
  )
}
