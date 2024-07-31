/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // output: 'export',
    // output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
    compress: true,
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

export default nextConfig;
