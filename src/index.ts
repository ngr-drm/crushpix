import { serve } from '@hono/node-server'
import api from './app/api.js';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serveStatic } from 'hono/serve-static'
import { fileURLToPath } from 'url';
import path from 'path';
import { readFile } from 'fs/promises';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = new Hono();

app.use(
  '*',
  serveStatic({
    getContent: async (filepath) => {
      const fullPath = path.join(__dirname, '../public', filepath)
      try {
        return await readFile(fullPath)
      } catch {
        return null
      }
    }
  })
)

app.use(logger())

app.route('/', api);


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
