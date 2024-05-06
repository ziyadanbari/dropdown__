4;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        alarm: {
          500: "var(--alarm-500)",
          600: "var(--alarm-600)",
        },
        warning: {
          500: "var(--warning-500)",
        },
        positive: {
          500: "var(--positive-500)",
          700: "var(--positive-700)",
        },
        background: {
          color: "var(--background-color)",
        },
      },
    },
  },
  plugins: [],
};
