
import axios from "axios";
import { headers } from "../../data/general/general";
import { FourPXData, FourPXResponse, FourPXTrackingHistory } from "@/types/response";
export const get4pxData = async (trackingNumber: string) => {
    const url = `https://track.4px.com/track/v2/front/listTrackV3`; 
    const response = await axios.post(url, {
        "queryCodes": [trackingNumber],
    }, {headers: headers});
    
    const data = response.data.data[0];
    const ctStartCode = data.ctStartCode;
    const ctEndCode = data.ctEndCode;
    const ctEndName = data.ctEndName;
    const ctStartName = data.ctStartName;
    const status = data.status;
    const shipperCode = data.shipperCode;
    const multiPackage = data.mutiPackage;
    const trackingNo = data.hawbCodeSet[1];
    const tracks = data.tracks.map((track: FourPXTrackingHistory) => {
        return {
            tkCode: track.tkCode,
            tkDesc: track.tkDesc,
            tkLocation: track.tkLocation,
            tkDate: track.tkDate,
            tkDateStr: track.tkDateStr,
            tkCategoryName: track.tkCategoryName,
            tkTimezone: track.tkTimezone,
        }
    });

    const result: FourPXData = {
        ctStartCode,
        ctEndCode,
        ctEndName,
        ctStartName,
        status,
        shipperCode,
        multiPackage,
        trackingNo,
        tracks,
    }
    return {
        data: result,
        message: "Success",
    } as FourPXResponse;
}   