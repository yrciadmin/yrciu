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
        "instructors": "url('../assets/instructors-bg.png')",
        "instructors-mobile": "url('../assets/instructors-bg-mobile.png')",
        "instructors-title": "url('../assets/instructors-mobile.png')",
        "cody-headshot": "url('../assets/headshots/cody_headshot.jpg')",
        "dan-headshot": "url('../assets/headshots/dan_headshot.jpg')",
        "diane-headshot": "url('../assets/headshots/diane_headshot.jpg')",
        "cris-headshot": "url('../assets/headshots/cris_headshot.jpg')",
        "tyesha-headshot": "url('../assets/headshots/tyesha_headshot.jpg')",

        "course-1": "url('../assets/cardImages/courseImage1.png')",
        "course-2": "url('../assets/cardImages/courseImage2.png')",
        "course-3": "url('../assets/cardImages/courseImage3.png')",
        "course-4": "url('../assets/cardImages/courseImage4.png')",

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
          '0%': {
            'transform': 'translate(0, 0)'
        },
        '100%': {
            'transform': 'translate(-100%, 0)'
        }
        },
      },
      animation: {
        'scroll-logo': 'scroll 15s linear infinite',
      },
    },
   
  },
  plugins: [],
};
export default config;
