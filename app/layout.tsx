import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Script from "next/script";

import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://charlesac.dev"),
  title: "Charles Acosta",
  description:
    "Hi, I'm Charles Acosta! Check out my web development projects and blog posts, and learn about my journey in tech.",
  keywords: [
    "Next.js",
    "TypeScript",
    "Web Development",
    "College",
    "University",
    "Programming",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Charles Acosta",
  category: "Technology",
  openGraph: {
    type: "website",
    title: "Charles Acosta",
    description:
      "Hi, I'm Charles Acosta! Check out my web development projects and blog posts, and learn about my journey in tech.",
    url: "https://charlesac.dev",
    siteName: "Charles Acosta",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      {
        url: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@charlesacosta163",
    title: "Charles Acosta",
    description:
      "Hi, I'm Charles Acosta! Check out my web development projects and blog posts, and learn about my journey in tech.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
      {
        url: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../app/favicon.ico" />
      </Head>

      <body
        className={`bg-body-light text-text-light dark:bg-body-dark dark:text-text-dark poppins-regular `}
      >
        {children}
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_G_ID as string} />
    </html>
  );
}
