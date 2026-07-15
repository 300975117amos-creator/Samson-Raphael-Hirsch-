/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Content (MDX/data) lives under src/content and is loaded via typed loaders in
  // src/lib — never hard-coded into animation components (see DECISIONS.md D-007).
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
