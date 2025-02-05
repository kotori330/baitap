/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./js/*.js"],
  theme: {
    extend: {
      screen: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
      },
       keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' }, 
          '80%': { transform: 'scaleY(1.2)' }, 
          '100%': { transform: 'scaleY(1)' }, 
        },
        'close-menu': {
          '0%': { transform: 'scaleY(1)' }, 
          '80%': { transform: 'scaleY(1.2)' }, 
          '100%': { transform: 'scaleY(0)' }, 
        },
       },
      //  animation-fill-mode: forwards -> Giúp animated object giữ nguyên trạng thái, vị trí sau khi animation kết thúc
       animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards',
        
       }
    },
  },
  plugins: [],
}

