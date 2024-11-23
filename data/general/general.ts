const isProduction = process.env.NODE_ENV === 'production';
const url = isProduction ? 'https://parcel-tracker-one.vercel.app/' : 'http://localhost:3000/';

export { url };