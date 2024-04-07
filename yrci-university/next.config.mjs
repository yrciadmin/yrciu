/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; frame-ancestors 'self' https://yrci.com; style-src 'self' 'unsafe-inline' 'nonce-YourUniqueNonceValue'; fonts.googleapis.com use.fontawesome.com; font-src 'self' fonts.gstatic.com use.fontawesome.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' use.fontawesome.com;",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  