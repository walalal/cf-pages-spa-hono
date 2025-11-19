import React from "react"

export const App = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is rendered by Hono + React SSR on Cloudflare Pages.</p>
    </div>
  )
}

