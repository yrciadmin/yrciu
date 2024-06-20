/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yrci.com'],
  },
    // async headers() {
    //     return [
    //       {
    //         source: '/:path*',
    //         headers: [
    //           {
    //             key: 'Content-Security-Policy',
    //             value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; frame-ancestors 'self' https://yrci.com/; font-src 'self' fonts.gstatic.com use.fontawesome.com data:; img-src 'self' data:;",
    //           },
    //         ],
    //       },
    //     ];
    //   },
  };
  
  export default nextConfig;
  