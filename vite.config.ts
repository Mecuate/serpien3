import path from 'path'
import { readdirSync } from 'fs'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const absolutePathAliases: { [key: string]: string } = {}
const srcPath = path.resolve('./src/')
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((fileItem) =>
    fileItem.name.replace(/(\.ts){1}(x?)/, '')
)

srcRootContent.forEach((directory) => {
    absolutePathAliases[directory] = path.join(srcPath, directory)
})

export default defineConfig({
    mode: 'test',
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
        // you might want to disable it, if you don't have tests that rely on CSS
        // since parsing CSS is slow
        css: true,
    },
    resolve: {
        alias: {
            ...absolutePathAliases,
        },
    },
    server: {
        port: 80,
    },
})
