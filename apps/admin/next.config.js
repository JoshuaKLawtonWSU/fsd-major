/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/db"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals, '@prisma/client', 'prisma'];
    }
    return config;
  },
};

export default nextConfig;