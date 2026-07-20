/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/orchestre-rando',
  assetPrefix: '/orchestre-rando',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
