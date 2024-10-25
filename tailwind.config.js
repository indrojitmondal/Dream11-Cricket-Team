/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        credit: 'rgb(231, 254, 41)',
       

        player: 'rgb(217, 217, 217)',
        subscriber: 'rgba(19, 19, 19, 0.3)',
        b1:'rgb(255, 255, 255)',
        b2: 'rgba(19, 19, 19, 0.1)',
       
       
        

      },
      fontFamily: {
                'sans': ['ui-sans-serif', 'system-ui'],
                'serif': ['ui-serif', 'Georgia'],
                'mono': ['ui-monospace', 'SFMono-Regular'],
                'display': ['Oswald'],
                'body': ['"Open Sans"',],
                'manrope' : ['Manrope', 'sans-serif'],
                'roboto' : ['Roboto', 'sans-serif'],
               
            },

    }
  },
  plugins: [
    require('daisyui'),
  ],
}

