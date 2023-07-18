/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/api/send-email",
        destination: "https://api.sendgrid.com/v3/mail/send",
      },
    ];
  },
};

module.exports = nextConfig;
