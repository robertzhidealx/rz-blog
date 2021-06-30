module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        headerh: "107px",
        headerhm: "67px",
        navcontenth: "27px",
        typewriterh: "322px",
        twcontenth: "152px",
      },
      width: {
        navw: "760px",
        navcontentw: "680px",
      },
      margin: {
        typewritert: "100px",
        typewriterb: "70px",
        twtextb: "0.725rem",
        postp: "27.55px",
        postli: "13.775px",
      },
      fontSize: {
        header: [
          "19px",
          {
            lineHeight: "1.45rem",
          },
        ],
        twwrapper: ["1.33rem"],
        typewriter: [
          "118.5%",
          {
            lineHeight: "2.3rem",
          },
        ],
        posttitle: [
          "38px",
          {
            letterSpacing: "-0.03em",
            lineHeight: "41.8px",
          },
        ],
        postdate: [
          "15px",
          {
            letterSpacing: "-0.03em",
            lineHeight: "15px",
          },
        ],
        postcontent: [
          "19px",
          {
            lineHeight: "32.3px",
          },
        ],
      },
      textColor: {
        gray: {
          headeritem: "#4a5568",
          typewriter: "#718096",
        },
        blue: {
          link: "#2b6cb0",
        },
      },
      letterSpacing: {
        typewriter: "-0.03rem",
      },
      screens: {
        mobile: { max: "767px" },
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      borderColor: {
        linkborder: "#2b6cb0",
      },
      fontFamily: {
        lyon: ["Lyon"],
      },
      keyframes: {
        appear: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "20%, 100%": {
            transform: "translateX(0%)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "20%, 100%": {
            transform: "translateX(40%)",
            opacity: 0,
          },
        },
        yes: {
          "0%": {},
          "20%, 100%": {
            transform: "translateX(20%)",
          },
        },
        floatUp: {
          "0%": {},
          "15%": {
            transform: "translateY(-20%)",
          },
          "30%, 100%": {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        dark2: "appear 5s infinite",
        dark1: "fadeOut 5s infinite",
        light1: "yes 5s infinite",
        floatUp: "floatUp 5s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
