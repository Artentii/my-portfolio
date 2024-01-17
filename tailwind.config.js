/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#C497EA",
        "primary-color-light": "#E9CDFF",
        "primary-color-dark": "#A06AF8",
        "secondary-color": "#FFEC88",
        "secondary-color-light": "#FFF7CC",
        "secondary-color-dark": "#ECB37E",
        light: "#fff3e5",
        dark: "#313A41",
        "gray-normal": "#4d5358",
        "gray-light": "#717D96",
      },
      boxShadow: {
        button: "4px 4px #E9CDFF",
        "button-two": "6px 6px #E9CDFF",
        "button-hero-s": "4px 4px #E9CDFF",
        "button-hero": "6px 6px #E9CDFF",
        "button-job-hover": "8px 8px #E9CDFF",
        "service-card": "6px 6px #E9CDFF",
        "tool-card": "4px 4px #C497EA",
        "project-card": "6px 6px #E9CDFF",
        "image-card": "4px 4px #ffb5d0",
        section: "3px 3px #E9CDFF",
      },
      dropShadow: {
        testimonial: "4px 4px #C497EA",
      },
      screens: {
        "3xl": "1920px",
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
        arrow: "arrow 2s ease-in-out infinite",
        heart: "heart 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        tail: "tail .5s infinite",
        swing: "swing 2s ease-in-out infinite",
        tree: "tree 2s ease-in-out infinite",
        light: "light 2s ease-in-out infinite",
        question: "question 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "scale(95%) translateY(0)", opacity: "75%" },
          "50%": { transform: "scale(100%) translateY(-3px)", opacity: "100%" },
        },
        arrow: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        heart: {
          "0%, 100%": { transform: "scale(95%) rotate(8deg)" },
          "50%": { transform: "scale(100%) rotate(5deg)" },
        },
        float: {
          "0%, 100%": { transform: " translateY(0px)" },
          "50%": { transform: " translateY(5px)" },
        },
        tail: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(5px) rotate(-1deg)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": {
            transform: "rotate(-2deg)",
          },
        },
        tree: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": {
            transform: "rotate(.5deg)",
          },
        },
        light: { "0%, 100%": { opacity: "50%" }, "50%": { opacity: "100%" } },
        question: { "0%": { transform: " translateY(8px) rotate(-3deg)" }, "50%": { transform: "translateY(0px) rotate(-3deg)" }, "100%": { transform: "translateY(8px) rotate(-3deg)" } },
      },
      borderRadius: {
        large: "50px",
      },
    },
  },
  plugins: [],
};
