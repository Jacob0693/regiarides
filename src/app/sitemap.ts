import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/ride-experience", "/how-it-works", "/vehicles", "/providers", "/faq", "/request"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://regiarides.com${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/request" ? 0.9 : 0.8,
  }));
}
