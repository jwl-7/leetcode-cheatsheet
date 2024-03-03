import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
    plugins: [react()],
    base: "https://jwl-7.github.io/leetcode-cheatsheet/",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@code': path.resolve(__dirname, './src/code'),
            '@components': path.resolve(__dirname, './src/components'),
            '@fonts': path.resolve(__dirname, './src/fonts'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@images': path.resolve(__dirname, './src/images'),
            '@icons': path.resolve(__dirname, './src/icons'),
            '@sections': path.resolve(__dirname, './src/sections'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@utils': path.resolve(__dirname, './src/utils')
        }
    },
    build: {
        outDir: 'docs',
    }
})
