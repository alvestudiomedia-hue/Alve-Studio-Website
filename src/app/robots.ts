import type { MetadataRoute } from "next";

/**
 * Vercel sets VERCEL_ENV to "production" | "preview" | "development" at
 * build time. Only the production deployment may be indexed — a publicly
 * reachable staging copy would compete with the real site in search.
 * Local builds have no VERCEL_ENV, so they fail closed to disallow.
 */
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  return {
    rules: isProduction
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
  };
}
