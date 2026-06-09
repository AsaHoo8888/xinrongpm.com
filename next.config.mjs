/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/new-ppr20-63mm-high-speed-pipe-extrusion-lines-testing",
        destination: "/news/new-ppr20-63mm-high-speed-pipe-extrusion-lines-testing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
