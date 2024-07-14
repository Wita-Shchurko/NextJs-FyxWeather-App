/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.weatherapi.com'],
  },
  output: 'export',
  assetPrefix: '/FyxWeather-NextJs/',
};

export default nextConfig;
