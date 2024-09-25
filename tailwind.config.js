/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navbar: "0 0 1rem #0009",
      },
      backgroundImage: {
        "custom-gradient-desktop":
          "linear-gradient(106.67deg, #ffffff36 -10.33%, #0000000f 39.25%, #5050500d)",
        "custom-gradient":
          "linear-gradient(106.67deg, rgba(84, 84, 84, 0.347) -10.33%, hsla(0, 0%, 56%, 0.631) 39.25%, #4b4b4b54)",
        "home-swiper":
          "linear-gradient(0deg, #343744 .26%, #343744 73.51%, #24242400)",
        "swiper-slide-border": "linear-gradient(135deg, #585858, #161617)",
        "swiper-slide-border-hover":
          "linear-gradient(161.55deg, hsla(0, 0%, 100%, .294) -9.06%, #11121997 39.4%, #111219)",
        "card-hover":
          "linear-gradient(160deg, #ffffff59 -10.06%, rgba(0, 0, 0, .178) 39.4%, hsla(0, 2%, 9%, .446))",
        "card-background":
          "linear-gradient(338deg, rgba(41, 41, 41, .266) 31%, hsla(200, 1%, 59%, .152))",
      },
      screens: {
        "3xl": "1536px",
      },
    },
    screens: {
      sm: "520px",
      // => @media (min-width: 640px) { ... }

      "2sm": "680px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      "2md": "900px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
