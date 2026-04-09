import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnatulla-mamur-portfolio.vercel.app"),
  title: {
    default: "Sunnatulla Mamur | Portfolio",
    template: "%s | Sunnatulla Mamur"
  },
  description:
    "Portfolio of Sunnatulla Mamur — projects & research in IoT, AI, embedded systems, and educational technology.",
  applicationName: "Sunnatulla Mamur Portfolio",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/"
    }
  },
  keywords: [
    "Sunnatulla Mamur",
    "Portfolio",
    "IoT",
    "Embedded Systems",
    "AI",
    "Machine Learning",
    "Robotics",
    "Research",
    "Soonchunhyang University"
  ],
  authors: [{ name: "Sunnatulla Mamur" }],
  creator: "Sunnatulla Mamur",
  publisher: "Sunnatulla Mamur",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sunnatulla Mamur Portfolio",
    title: "Sunnatulla Mamur | Portfolio",
    description:
      "Projects & research in IoT, AI, embedded systems, and educational technology.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Sunnatulla Mamur"
      }
    ],
    locale: "en_US",
    alternateLocale: ["ko_KR"]
  },
  twitter: {
    card: "summary",
    title: "Sunnatulla Mamur | Portfolio",
    description:
      "Projects & research in IoT, AI, embedded systems, and educational technology.",
    images: ["/logo.png"]
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png" }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // Intentionally inlined to help crawlers/LLMs.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sunnatulla Mamur",
              alternateName: ["순나툴라 마무르", "Sunnatulla_Mamur"],
              url: "https://sunnatulla-mamur-portfolio.vercel.app/",
              jobTitle: ["Engineer", "Researcher"],
              knowsAbout: [
                "Internet of Things (IoT)",
                "Embedded Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Robotics",
                "Educational Technology"
              ],
              sameAs: [
                "https://github.com/minhauser",
                "https://blog.naver.com/sunnatulla_mamur",
                "https://t.me/Sunnatulla_Mamur",
                "https://www.instagram.com/sunnatulla_mamur/"
              ]
            })
          }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
