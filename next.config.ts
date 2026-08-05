import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root, otherwise Turbopack walks up past the project
    // and picks up an unrelated lockfile in the user's home directory.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
