/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Optional: Add SVGR-specific options here
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
