const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/v1/' : '',
  basePath: isProd ? '/v1' : '',
  output: 'export'
};

export default nextConfig;
