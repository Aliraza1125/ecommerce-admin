/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_PROD_URL: process.env.NODE_ENV === 'production'
      ? 'https://store-admin-one-liart.vercel.app/api/'
      : 'http://localhost:3000/api/',
    storageURL: process.env.NODE_ENV === 'production'
      ? 'https://store-admin-one-liart.vercel.app/assets'
      : 'http://localhost:3000/assets',
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store-admin-one-liart.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;