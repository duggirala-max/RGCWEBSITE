import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/euphoria-landing",
        destination: "/euphoria-landing/index.html",
      },
      {
        source: "/euphoria-landing/",
        destination: "/euphoria-landing/index.html",
      },
      {
        source: "/euphoria-landing/enquiry.php",
        destination: "/api/enquiry",
      },
      {
        source: "/euphoria-landing/brochure.php",
        destination: "/api/brochure",
      },
    ];
  },
};

export default nextConfig;
