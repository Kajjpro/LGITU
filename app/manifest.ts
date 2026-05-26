import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LGITU — Let's Go Into Top Universities",
    short_name: "LGITU",
    description:
      "Free, honest prep guides for the SAT, IELTS, and HSK. No login, no noise.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0D11",
    theme_color: "#4F46E5",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
