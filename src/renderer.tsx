import React from "react"
import { renderToString } from 'react-dom/server'
import { App } from './App'

export function renderPage(name: string) {
  const html = renderToString(<App name={name} />)

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Hono React SSR</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/client.js"></script>
      </body>
    </html>
  `
}
