import { Hono } from 'hono'
import { handle } from "hono/cloudflare-pages";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const app = new Hono()

app.get('/about', async (c) => {
  return c.text('Data api')
})

export const onRequest = handle(app);

