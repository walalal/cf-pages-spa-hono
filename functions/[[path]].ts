import { Hono } from "hono"
import { renderer } from "../src/renderer"
import initView from '../src/view'
import { LanguageDetector, Translatori18n, ViewRenderer } from '../src/middleware'
import createBlogServer from '../src/blog'
import { getPath } from '../src/locales'
import { handle } from "hono/cloudflare-pages";

initView()
const app = new Hono({ getPath })

app.use(LanguageDetector)
app.use(Translatori18n)
app.use(Renderer)
app.use(ViewRenderer)

app.get('/', (c) => {
  return c.view('hello', {
    meta: {
      title: 'Honojs demo with react SSR and shadcn UI.',
    },
    props: {
      tp: 'index'
    }
  })
})

export const onRequest = handle(app)
