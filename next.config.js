/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['./mp3/WhenTheMorningComes.mp3', './img/trees-001.jpg', './media/media-1.jpg', './media/media-2.jpg', './media/media-3.jpg', './media/media-4.jpg', './media/media-5.jpg'],
  },
  crossOrigin: 'anonymous'
}

module.exports = nextConfig
