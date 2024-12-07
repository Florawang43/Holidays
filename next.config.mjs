/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        // https://date.nager.at/api/v3/AvailableCountries
        destination: "https://date.nager.at/api/v3/:path*",
      },
    ];
  },
};

export default nextConfig;
