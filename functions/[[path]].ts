import { Hono } from "hono"
import { renderPage } from "../src/renderer"

const app = new Hono()

app.get("*", c => {
  const url = new URL(c.req.url)
  const name = url.searchParams.get("name") ?? "World"
  return c.html(renderPage(name))
})

export const onRequest = app.fetch
