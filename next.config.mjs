/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pixel-kitchen',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
