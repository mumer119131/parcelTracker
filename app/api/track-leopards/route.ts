import { TrackingResponseError, TrackingResponse } from '@/types/response';
import { NextResponse, NextRequest } from 'next/server';
import { getLeopardsData } from '@/utils/scrapers/leopards';


export async function POST(req: NextRequest) {
    const { trackingId } = await req.json();
    try {
        console.log(trackingId)
        const data = await getLeopardsData(trackingId);
        return NextResponse.json(data);
    } catch (error: unknown) {
        if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}


