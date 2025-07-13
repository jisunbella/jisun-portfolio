/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // src 폴더 내 모든 JSX/TSX 파일에서 Tailwind 사용 가능
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      fontFamily: {
        korean: ['UnDinaru', 'sans-serif'],
        english: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
