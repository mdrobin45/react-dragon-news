/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: "Poppins, sans-serif",
         },
         lineHeight: {
            tight: "26px",
            medium: "30px",
            loose: "35px",
         },
         fontSize: {
            lg: "20px",
            md: "18px",
            sm: "16px",
         },
         colors: {
            primary: "#403F3F",
            secondary: "#706F6F",
         },
         container: {
            padding: {
               DEFAULT: "5rem",
            },
         },
      },
   },
   plugins: [],
};
