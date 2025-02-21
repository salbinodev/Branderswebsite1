module.exports = {
  content: [
    './index.html',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Add this if using App Router
  ],
  theme: {
    extend: {
      colors: {
        wine: '#800000',
      },
    },
  },
  plugins: [],
};
