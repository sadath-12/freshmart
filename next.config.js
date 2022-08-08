const withPwa = require('next-pwa')
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfig = withPwa({
  pwa:{
    register: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
    scope: '/',
    sw: 'service-worker.js',
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["i.ibb.co","i.postimg.cc"]
  },
})

module.exports = nextConfig
