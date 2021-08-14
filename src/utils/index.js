import { sharedPreferences } from "../styles/theme"

export const detectMobileAndTablet = windowWidth =>
  windowWidth <
  parseInt(sharedPreferences.breakpoints.lg.match(/\d+/gi).join(""))

export const isSSR = typeof window === "undefined"
