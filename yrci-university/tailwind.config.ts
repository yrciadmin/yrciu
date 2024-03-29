import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "featured-courses": "url('../assets/featured-course-section-bg.png')",
        "contact-us": "url('../assets/contact-us-section.png')",
      },
      colors: {
        "dark-gray": "#444444",
        "dark-teal": "#134d61",
        "light-gray": "#ebebeb",
        "medium-gray": "#989899",
        "mustard-shadow": "#FFFBF2",
        "mustard-yellow": "#d78b2b",
        "muted-turquise": "#5698a1",
        "red-shadow": "#FFE8E7",
        "turquise-shadow": "#E6FCFF",
        "yrci-black": "#ce2129",
        "yrci-red": "#ce2129",
      },
      keyframes: {
        scroll: {
          from: {
            transform: 'translateX(0%)'
          },
          to: {
            transform: 'translateX(-50%)'
          }
        }
      },
      animation: {
        'scroll-logo': 'scroll 10s infinite linear',
      },
    },
   
  },
  plugins: [],
};
export default config;
