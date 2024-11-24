import { get4pxData } from '@/utils/scrapers/4px';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const { trackingId } = await req.json();
    try {
        const data = await get4pxData(trackingId);
        return NextResponse.json({ data });
    } catch (error: unknown) {
        if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}


