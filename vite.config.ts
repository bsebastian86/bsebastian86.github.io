import type { IncomingMessage } from 'node:http'
import react from '@vitejs/plugin-react'
import { defineConfig, type PreviewServer, type ViteDevServer } from 'vite'

function rewriteArchiveIndex(req: IncomingMessage) {
  if (req.url === '/archive' || req.url === '/archive/') {
    req.url = '/archive/index.html'
  }
}

function serveArchiveIndex() {
  const attach = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use((req, _res, next) => {
      rewriteArchiveIndex(req)
      next()
    })
  }

  return {
    name: 'serve-archive-index',
    configureServer: attach,
    configurePreviewServer: attach,
  }
}

export default defineConfig({
  plugins: [react(), serveArchiveIndex()],
})
