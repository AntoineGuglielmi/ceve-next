import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cv-admin.antoine-g.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
