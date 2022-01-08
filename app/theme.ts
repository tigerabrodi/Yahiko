import { createTheme as createMuiTheme } from '@mui/material/styles'

interface CreateThemeOptions {
  prefersLightMode: boolean
}

export const fonts = {
  roboto: "'Roboto', sans-serif",
  open: "'Open Sans', sans-serif",
}

export const colors = {
  cyan: {
    dark: 'hsl(184, 91%, 17%)',
    light: 'hsl(185, 57%, 50%)',
  },
  grey: {
    dark: 'hsl(209, 61%, 16%)',
    light: 'hsl(209, 23%, 60%)',
  },
  indigo: {
    dark: 'hsl(234, 62%, 26%)',
    light: 'hsl(225, 57%, 67%)',
  },
  pink: {
    dark: 'hsl(330, 79%, 20%)',
    light: 'hsl(330, 72%, 65%)',
  },
}

export function createTheme({ prefersLightMode }: CreateThemeOptions) {
  return createMuiTheme({
    palette: {
      background: {
        default: colors.grey.dark,
      },
      mode: prefersLightMode ? 'light' : 'dark',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1024,
        xl: 1500,
      },
    },
    typography: {
      fontFamily: fonts.open,
    },
  })
}
