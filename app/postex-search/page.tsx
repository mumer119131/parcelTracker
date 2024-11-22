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

const PostExSearch = () => {
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
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Tracking Id</Label>
                    <Input id="name" placeholder="Tracking Id #" />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Reset</Button>
                <Button>Search</Button>
            </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default PostExSearch