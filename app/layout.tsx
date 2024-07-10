import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charles Acosta",
  description: "Portfolio made from Next 14",
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
      <body className={`bg-body-light text-text-light dark:bg-body-dark dark:text-text-dark poppins-regular `}>{children}</body>
    </html>
  );
}
