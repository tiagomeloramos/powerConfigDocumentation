// next.config.js
const nextConfig = {
  output: 'export',
  //distDir: 'out', // Export files to "out" folder
  images: { 
    unoptimized: true,
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tiagomeloramos.github.io',
          pathname: '/powerConfigDocumentation/**',
        },
      ],
  },
  reactStrictMode: true,
  basePath: '/powerConfigDocumentation',
  //assetPrefix: '/powerConfigDocumentation/',
};

module.exports = nextConfig;
