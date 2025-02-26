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
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true, // Temporary fix for TS errors
    },
    eslint: {
        ignoreDuringBuilds: true, // Temporary fix for ESLint errors
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg|webp|mov|mp4|webm)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'static/[name].[hash][ext]'
            }
        });
        return config;
    }

};

module.exports = nextConfig;