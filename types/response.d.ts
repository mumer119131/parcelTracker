interface TrackingResponse {
    message: string;
    data: TrackingData | null;
}
interface TrackingData {
    trackingNumber: string;
    status?: string;
    customerName?: string;
    senderName?: string;
    estimatedDelivery?: string;
    orderPickupDate?: string;
    history: Array<TrackingHistory>;
}

interface TrackingHistory {
    date: string;
    location: string;
    status: string;
}
interface TrackingResponseError {
    error: string;
}

export interface LeopardsData {

    consignmentNo: string;
    currentStatus: string;
    currentStatusDate: string;
    consignee: string;
    reference_no: string;
    shipper: string;
    shipmentDetails: {
  
      origin: string;
  
      destination: string;
  
      bookingDate: string;
  
      pieces: string;
  
      weight: string;
  
    };
  
    trackingInformation: { date: string; content: string }[];
  
  }
interface LeopardsTrackingHistory {
    date: string;
    content: string;
}

interface LeopardsResponse {
    message: string;
    data: LeopardsData | null;
}



export interface FourPXData {
    ctStartCode: string;
    ctEndCode: string;
    ctEndName: string;
    ctStartName: string;
    status: string;
    shipperCode: string;
    multiPackage: boolean;
    trackingNo: string;
    tracks: Array<FourPXTrackingHistory>;
}

export interface FourPXTrackingHistory {
    tkCode: string;
    tkDesc: string;
    tkLocation: string;
    tkDate: string;
    tkDateStr: string;
    tkCategoryName: string;
    tkTimezone: string;
}

export interface FourPXResponse {
    message: string;
    data: FourPXData | null;
}
export type { TrackingResponse, TrackingResponseError, TrackingHistory, TrackingData, LeopardsData, LeopardsTrackingHistory, LeopardsResponse };