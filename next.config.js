/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "openweathermap.org",
            }
        ]
    },
}

module.exports = nextConfig
