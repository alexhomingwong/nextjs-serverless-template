/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: "/api/sso/logout",
        destination:"https://test-procure-ai.auth.eu-west-2.amazoncognito.com/logout?client_id=648fb9glglgmgqffrs6cofbdp2&logout_uri=http://localhost:3000&response_type=code",
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
