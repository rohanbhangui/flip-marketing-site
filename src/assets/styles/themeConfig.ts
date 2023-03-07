// eslint-disable-next-line no-unused-vars
const smallPhone = 480 // XS
// Small devices (landscape phones, 576px and down)
const phone = 576 // SM
// smallTablet devices (tablets, 768px and down)
const smallTablet = 768 // MD
// tablet devices (desktops, 1024 and down)
const tablet = 1024 // LG
// Extra tablet devices (tablet desktops, 1200px and down)
const smallDesktop = 1200 // XLG

const desktop = 1440 // XXL

const largeDesktop = 1600 // XXXL

const desktopFHD = 1920 // XXXXL

const desktopQHD = 2560 // XXXXXL

const desktop4K = 3840 // XXXXXXL

const theme = {
  mediaQuery: {
    smallPhone: `(min-width: ${smallPhone}px)`,
    phone: `(min-width: ${phone}px)`,
    smallTablet: `(min-width: ${smallTablet}px)`,
    // because Ipad mini and regular Ipad share the same viewport (1024 width)
    // required to allow the filter to hide
    tablet: `(min-width: ${tablet}px)`,
    ipad: `(min-width: ${tablet + 1}px) and (min-height: ${smallTablet}px)`,
    smallDesktop: `(min-width: ${smallDesktop}px)`,
    desktop: `(min-width: ${desktop}px)`,
    largeDesktop: `(min-width: ${largeDesktop}px)`,
    desktopFHD: `(min-width: ${desktopFHD}px)`,
    desktopQHD: `(min-width: ${desktopQHD}px)`,
  },
  fonts: {
    primary: "'GeneralSans', sans-serif",
    secondary: "'ClashDisplay', sans-serif",
  },
  colors: {
    yellow: '#F2C94C',
    blue: '#2F6AD8',
    green: '#9DEF5D',
    darkGreen: '#27AE60',
    orange: '#F14E3A',
    yellowOrange: '#FF9432',
    background: '#111111',
    backgroundLight: '#242424',
    backgroundDark: '#000000',
  },
}

export type ThemeType = typeof theme

export {
  smallPhone,
  phone,
  smallTablet,
  tablet,
  smallDesktop,
  desktop,
  largeDesktop,
  desktopFHD,
  desktopQHD,
  desktop4K,
  theme,
}
