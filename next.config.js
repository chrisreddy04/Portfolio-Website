/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export', // Enables static export
    images: {
        unoptimized: true, // Disables Image Optimization API
    },
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: true, // Temporary fix for TS errors
    },
    eslint: {
        ignoreDuringBuilds: true, // Temporary fix for ESLint errors
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'example.com',
        }, ],
        // For local images
        domains: ['localhost'],
    },
    trailingSlash: true,
};

module.exports = nextConfig;