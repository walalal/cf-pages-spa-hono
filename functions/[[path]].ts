import { Hono } from "hono"
import { renderPage } from "../src/renderer"
import { handle } from "hono/cloudflare-pages";

const app = new Hono()

app.get("*", c => {
  const url = new URL(c.req.url)
  const name = url.searchParams.get("name") ?? "World"
  return c.html(renderPage(name))
})

export const onRequest = handle(app)
