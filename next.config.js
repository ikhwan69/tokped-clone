/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // unoptimized: true,
    remotePatterns: [{
      protocol: "https",
      hostname: "i.ibb.co",
    }, ],
  },
}

module.exports = nextConfig