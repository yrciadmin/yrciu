/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; frame-ancestors 'self' http://127.0.0.1:5500/ http://localhost:3000/ https://yrci.com; font-src 'self' fonts.gstatic.com use.fontawesome.com data:; img-src 'self' data:;",
              },
            ],
          },
        ];
      },
  };
  
  export default nextConfig;
  