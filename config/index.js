module.exports = {
  author: "@noelinemariejeanne",
  siteTitle: "Noeline Marie",
  siteShortTitle: "Noeline Marie",
  siteDescription: "Noeline portfolio",
  siteUrl: "https://noeline-portfolio.vercel.app/",
  siteLanguage: "en_US",
  siteIcon: "content/noeline.jpg",
  seoTitleSuffix: "Noeline Marie",
  useCookieBar: false,
  googleAnalyticsTrackingId: "",

  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },
  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/vakodrazan",
    },
    {
      name: "Mail",
      url: "mailto:noeline.mar@onja.org",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
  },
}
