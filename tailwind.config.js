/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#ffffff',
        'custom-gray': '#f3f4f6',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          accent: '#1f2937',
          neutral: '#ffffff',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
