/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/orchestre-rando',
  assetPrefix: '/orchestre-rando',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/orchestre-rando',
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
