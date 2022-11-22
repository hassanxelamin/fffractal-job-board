/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {appDir: true},
  swcMinify: true,
}

module.exports = nextConfig