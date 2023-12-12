/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'globals.scss'),
    ]
  }
}

module.exports = nextConfig
