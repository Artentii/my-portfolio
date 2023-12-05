/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        razzmataz: "#e52573",
        "light-razzmataz": "#FFA0C7",
        "antique-white": "#F7E8D5",
        "cadmium-orange": "#ea832f",
        "light-cadmium-orange": "#ffdabb",
        dandelion: "#fcda70",
        "light-dandelion": "#FFE8A1",
        "lavander-pink": "#ffb5d0",
        "light-lavander-pink": "#FFE0EB",
        "egg-blue": "#8be3d3",
        gray: "#4d5358",
        "pale-page": "#fff3e5",
      },
      boxShadow: {
        "service-card": "6px 6px #ea832f",
        "tool-card": "4px 4px #e52573",
        "project-card": "6px 6px #e52573",
        "image-card": "4px 4px #ffb5d0",
        button: "3px 3px #e52573",
        "button-two": "6px 6px #e52573",
      }
    },
  },
  plugins: [],
};
