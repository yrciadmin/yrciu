/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:path*', 
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; frame-ancestors 'self' https://yrci.com;", 
              },
            ],
          },
        ];
      },
};

export default nextConfig;
