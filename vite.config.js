const { resolve } = require('path')

// vite默认集成postcss
export default {
    alias: {
        '/@/': resolve(__dirname, 'src')
    }
}