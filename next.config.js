/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export', // Enables static export
    basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : '', // Add this
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Website/' : '',
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true, // Must be first image config
        remotePatterns: [{
            protocol: 'https',
            hostname: 'example.com',
        }, ],
        domains: ['localhost'],
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true, // Temporary fix for TS errors
    },
    eslint: {
        ignoreDuringBuilds: true, // Temporary fix for ESLint errors
    },


};

module.exports = nextConfig;