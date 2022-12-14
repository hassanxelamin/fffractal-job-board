/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['rqtryxzgjgullcvniyvy.supabase.co'],
  },
  swcMinify: true,
  optimizeFonts: false,
}

module.exports = nextConfig