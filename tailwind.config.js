module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        custom2:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        custom3: "4px 4px 0px #212121",
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        secondary: {
          50: "#e6f2ff",
          100: "#cce0ff",
          200: "#99bfff",
          300: "#66a3ff",
          400: "#3399ff",
          500: "#007fff",
          600: "#0066cc",
          700: "#004c99",
          800: "#003366",
          900: "#001a33"
        },
        tertiary: {
          50: "#feffff",
          100: "#fefefe",
          200: "#fcfdfd",
          300: "#fbfbfb",
          400: "#f7f8f9",
          500: "#f4f5f6",
          600: "#dcdddd",
          700: "#b7b8b9",
          800: "#929394",
          900: "#787879",
        },
        quadtiary: {
          50: "#f6f2ff",
          100: "#ede6ff",
          200: "#d2bfff",
          300: "#b799ff",
          400: "#824dff",
          500: "#4c00ff",
          600: "#4400e6",
          700: "#3900bf",
          800: "#2e0099",
          900: "#25007d",
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
