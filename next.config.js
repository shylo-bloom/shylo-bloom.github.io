/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['./img/trees-001.jpg'],
  },
}

module.exports = nextConfig
