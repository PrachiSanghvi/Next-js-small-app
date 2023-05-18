/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  redirects: async() => {
    return [
      {
        source : '/news',
        destination: '/',
        permanent: false      
      }
    ]
  }
}

module.exports = nextConfig
