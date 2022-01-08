import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import * as React from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import styles from './styles.css'
import type { MetaFunction } from 'remix'
import { createTheme } from './theme'

export const meta: MetaFunction = () => {
  return { title: 'Yahiko', description: 'Write and share documents.' }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

export default function App() {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  const theme = React.useMemo(
    () => createTheme({ prefersLightMode }),
    [prefersLightMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Document>
        <Outlet />
      </Document>
    </ThemeProvider>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
