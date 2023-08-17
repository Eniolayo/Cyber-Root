/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  revalidate: 1000,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
