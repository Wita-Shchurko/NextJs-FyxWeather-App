/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;



// const nextConfig = {
//   images: {
//     domains: ['cdn.weatherapi.com'],
//   },
//   output: 'export',
//   assetPrefix: '/FyxWeather-NextJs/',
// };