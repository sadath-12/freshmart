/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["i.ibb.co","i.postimg.cc"]
  }
}

module.exports = nextConfig
