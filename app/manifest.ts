import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sunnatulla Mamur | Portfolio",
    short_name: "SM Portfolio",
    description:
      "Portfolio of Sunnatulla Mamur — projects & research in IoT, AI, embedded systems, and educational technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F1A",
    theme_color: "#0B0F1A",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}

