/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1rem, 10vw, 2rem)",
        h1: 'clamp(1.25rem, calc(1.375rem + (1.75 - 1.25) * ((100vw - 40rem) / (64 - 40))), 1.75rem)',
        h2: 'clamp(1.1rem, calc(1.2rem + (1.2 - 1.1) * ((100vw - 40rem) / (64 - 40))), 1.2rem)',	
        base: 'clamp(1rem, calc(1.05rem + (1.05 - 1) * ((100vw - 40rem) / (64 - 40))), 1.05rem)',
      },
      colors: {
        "theme": {
          "blue": "#bde3ff"
        }
      }
    },
  },
  plugins: [],
}