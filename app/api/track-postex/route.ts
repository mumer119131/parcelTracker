import { TrackingResponseError, TrackingResponse } from '@/types/response';
import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  if (req.method === 'GET') {
    return NextResponse.json({ error: 'Invalid Method' }, { status: 405 });
  }
  if (req.method === 'POST') {
    const body = await req.json();
    const { trackingId } = body;
    console.log(trackingId);
    if (!trackingId) {
      return NextResponse.json({ error: 'Tracking ID is required' }, { status: 400 });
    }

    try {
      // Replace this with the actual API call to PostEx or your backend logic
      const trackingData = await fetchPostExData(trackingId);

      return NextResponse.json(trackingData);
    } catch (error) {
      console.error(error);
      const errorResponse: TrackingResponseError = {
        error: 'Error fetching tracking information. Make sure the tracking ID is correct.',
      };
      return NextResponse.json(errorResponse, { status: 500 });
    }
  }

  // For non-POST requests
  return NextResponse.json({ error: 'Invalid Method' }, { status: 405 });
}

async function fetchPostExData(trackingId: string) {
  interface PostExData {
    statusCode: string;
    dist: {
      customerName: string;
      trackingNumber: string;
      orderPickupDate: string;
      transactionStatusHistory: Array<TrackingHistoryPostEx>;
    };
  }
  interface TrackingHistoryPostEx {
    transactionStatusMessage: string;
    transactionStatusMessageCode: string;
    modifiedDatetime: string;
  }
  let parcelData = {} as TrackingResponse;
  const url = "https://api.postex.pk/services/courier/api/guest/get-order/" + trackingId;
  const response = await axios.get(url);
  const data = response.data as PostExData;

  if (data.statusCode === '200') {
    parcelData = {
      message: 'Parcel found',
      data: {
        trackingNumber: data.dist.trackingNumber,
        status: data.dist.transactionStatusHistory[data.dist.transactionStatusHistory.length - 1].transactionStatusMessage,
        customerName: data.dist.customerName,
        estimatedDelivery: data.dist.transactionStatusHistory[data.dist.transactionStatusHistory.length - 1].modifiedDatetime,
        history: data.dist.transactionStatusHistory.map((history: TrackingHistoryPostEx) => ({
          date: history.modifiedDatetime,
          location: history.transactionStatusMessage,
          status: history.transactionStatusMessageCode,
        })),
      },
    };
  } else {
    parcelData = {
      message: 'Parcel not found',
      data: null,
    };
  }

  return parcelData;
}
