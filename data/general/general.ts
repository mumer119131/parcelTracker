const isProduction = process.env.NODE_ENV === 'production';
const url = isProduction ? 'https://parcel-tracker-one.vercel.app/' : 'http://localhost:3000/';

const leopards_headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    Referer: "https://www.leopardscourier.com/tracking",
    Origin: "https://www.leopardscourier.com",
    Host: "www.leopardscourier.com",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
  };
export { url, leopards_headers };