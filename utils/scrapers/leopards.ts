import axios from "axios";
import * as cheerio from "cheerio";
import { leopards_headers as headers } from "@/data/general/general";
import { LeopardsResponse, LeopardsData } from "@/types/response";

interface getLeopardsDataProps {
  trackingId: string;
}

export const getLeopardsData = async ( trackingId : getLeopardsDataProps) => {
  try {
    const url = "https://www.leopardscourier.com/tracking";
    const data = {
        cn_number: trackingId,
    }

    // Make the POST request
    const response = await axios.post(
      url,
      data, // Form data
      { headers}
    );

    if (response.status !== 200) {
      throw new Error(response.data.error || "Something went wrong");
    }

    const $ = cheerio.load(response.data);
    // console.log("Response:", response.data);
    // Extract Consignment Number
    const consignmentNo = $('td:contains("Consignment No.")')
      .text()
      .replace("Consignment No. :", "")
      .trim().split("\n")[0];
    console.log("Consignment No:", consignmentNo);

    // Extract Current Status
    const currentStatus = $('td:contains("Current Status/Reason :")')
      .next()
      .text()
      .trim();
    console.log("Current Status:", currentStatus);

    const shipper = $('td:contains("Shipper :")')
        .next()
        .text()
        .trim();
    
    console.log("Shipper:", shipper);

    const consignee = $('td:contains("Consignee :")')
        .next()
        .text()
        .trim();

    console.log("Consignee:", consignee);
    
    const reference_no = $('td:contains("Reference No. :")')
        .next()
        .text()
        .trim();

    console.log("Refernce No:", reference_no);
    // Extract Current Status Date
    const currentStatusDate = $('td:contains("Dated:")')
      .next()
      .text()
      .trim();
    console.log("Current Status Date:", currentStatusDate);

    // Extract Shipment Details
    const shipmentDetails = {
      origin: $('td:contains("Origin :")').next().text().trim(),
      destination: $('td:contains("Destination :")').next().text().trim(),
      bookingDate: $('td:contains("Booking Date :")').next().text().trim(),
      pieces: $('td:contains("Pieces :")').next().text().trim(),
      weight: $('td:contains("Weight :")').next().text().trim(),
    };
    console.log("Shipment Details:", shipmentDetails);

    // Extract Tracking Information
    const trackingInformation: { date: string; content: string }[] = [];
    $(".tracking-item").each((i, el) => {
      const date = $(el).find(".tracking-date").text().trim();
      const content = $(el).find(".tracking-content").text().trim();
      trackingInformation.push({ date, content });
    });
    console.log("Tracking Information:", trackingInformation);

    if(! consignmentNo) {
        throw new Error("Recheck the tracking number and try again");
    }

    // Combine all extracted data
    const result = {
        shipper,
        consignee,
        reference_no,
        consignmentNo,
        currentStatus,
        currentStatusDate,
        shipmentDetails,
        trackingInformation,
    } as LeopardsData;

    const response_data = {
        message: "Success",
        data: result,
    } as LeopardsResponse;
    return response_data

  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      throw new Error(err.message || "An unknown error occurred");
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
