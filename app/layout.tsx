import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/content/site-config";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexvance.dev"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.bio,
  keywords: [
    "Software Engineer",
    "Full-Stack Architect",
    "Systems Engineer",
    "TypeScript",
    "Next.js",
    "React",
    "Alex Vance",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: "https://alexvance.dev" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexvance.dev",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.bio,
    siteName: siteConfig.name,
    images: [
      {
        url: "/img_1.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.bio,
    images: ["/img_1.png"],
    creator: "@alexvance",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#040914",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full antialiased m-0 p-0">
      <body className="h-full w-full m-0 p-0 bg-[#040914] text-[#f1f5f9] selection:bg-blue-600/40 selection:text-white overflow-x-hidden">
        <SkipLink />
        <main id="main-content" className="w-full h-full min-h-[100svh] lg:h-[100svh] m-0 p-0 overflow-hidden flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
