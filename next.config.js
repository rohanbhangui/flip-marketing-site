/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: {
      displayName: true,
    },
  },
}

module.exports = nextConfig
