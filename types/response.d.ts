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

export type { TrackingResponse, TrackingResponseError, TrackingHistory, TrackingData };