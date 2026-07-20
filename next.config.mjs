/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — exports to ./out as plain HTML/CSS.
  output: "export",
  // GitHub Pages serves this repo at /AppPrivacy (project site).
  basePath: "/AppPrivacy",
  assetPrefix: "/AppPrivacy/",
  // Emit each route as a folder with index.html for maximum static-host support.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // No <Image> optimization server in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
