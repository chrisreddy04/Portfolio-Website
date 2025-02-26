const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    output: isProduction ? 'export' : undefined,
    basePath: isProduction ? '/Portfolio-Website' : undefined,
    assetPrefix: isProduction ? '/Portfolio-Website/' : undefined,
    swcMinify: true,
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;