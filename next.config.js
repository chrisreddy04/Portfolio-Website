/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: isProduction ? 'export' : undefined,
    basePath: isProduction ? '/Portfolio-Website' : '',
    assetPrefix: isProduction ? '/Portfolio-Website/' : '',
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: isProduction,
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config, { isServer }) => {
        // Only apply in production build
        if (isProduction) {
            config.module.rules.push({
                test: /\.(png|jpg|jpeg|gif|svg|webp|mp4|webm|mov)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[hash][ext]'
                }
            });
        }
        return config;
    }
};

module.exports = nextConfig;
