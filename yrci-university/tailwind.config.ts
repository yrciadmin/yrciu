import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'lgr': '1100px',
      'xxl': '1400px',
      '3xl': '2000px',
      '4xl': '3000px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        'fluid-text-6xl': 'clamp(2.565784513950348rem, calc(2.565784513950348rem + ((4.478975999999999 - 2.565784513950348) * ((100vw - 20rem) / (96 - 20)))), 4.478975999999999rem)',
      },
      boxShadow: {
        'red-shadow': '0px 4px 4px 0px rgba(205, 33, 41, 0.20)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "featured-courses": "url('../assets/featured_courses_bg.png')",
        "contact-us": "url('../assets/contact-us-section.png')",
        "hero-bg-mobile": "url('../assets/hero-mobile-bg.png')",
        "instructors": "url('../assets/instructors-bg.png')",
        "instructors-mobile": "url('../assets/instructors-bg-mobile.png')",
        "instructors-tablet": "url('../assets/instructors-bg-tablet.png')",
        "instructors-title": "url('../assets/instructors-mobile.png')",
        "reviews": "url('../assets/testimonial-section-bg.png')",
        "reviwews-card-bg": "url('../assets/YRCIU-WhiteSmall.png')",
        "cody-headshot": "url('../assets/headshots/cody_headshot.jpg')",
        "dan-headshot": "url('../assets/headshots/dan_headshot.jpg')",
        "diane-headshot": "url('../assets/headshots/diane_headshot.jpg')",
        "cris-headshot": "url('../assets/headshots/cris_headshot.jpg')",
        "tyesha-headshot": "url('../assets/headshots/tyesha_headshot.jpg')",

        "course-1": "url('../assets/cardImages/prep.jpg')",
        "course-2": "url('../assets/cardImages/hiring.jpg')",
        "course-3": "url('../assets/cardImages/vet-pref.jpg')",
        "course-4": "url('../assets/cardImages/exploring.png')",

      },
      colors: {
        "dark-gray": "#444444",
        "dark-teal": "#134d61",
        "light-gray": "#ebebeb",
        "medium-gray": "#989899",
        "mustard-shadow": "#FFFBF2",
        "mustard-yellow": "#d78b2b",
        "muted-turquise": "#5698a1",
        "red-shadow-mb": "#FFE8E7",
        "red-shadow": "#eec3c2",
        "turquise-shadow": "#E6FCFF",
        "yrci-black": "#040503",
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
