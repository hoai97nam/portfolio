/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        cursor: "b .6s linear infinite alternate",
        type: "type 5.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
        ff: 'typing 2.5s steps(15, end) infinite',
        ss: 'blink .75s step-end infinite'
        
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blink: {
          'from, to': { 'border-color': 'transparent ' },
          '50%': { 'border-color': 'orange' }
        },

      },
    },
  },
  plugins: [],
};
