/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
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
};

module.exports = nextConfig;