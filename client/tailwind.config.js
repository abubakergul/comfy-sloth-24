/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-brown": "#ab7a5f",
        "custom-grey": "#617d98",
      },
    },
  },
  plugins: [],
};
