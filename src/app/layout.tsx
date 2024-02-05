import { Outfit } from "next/font/google";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from 'next'

// Components
import NavBar from "./components/base/navbar";
import Footer from "./components/base/footer";
import BackToTopButton from "./components/BackToTopButton";

import "./globals.css";

export const metadata: Metadata = {
  title: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
  description: "Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen.",
  keywords: ["Visual Identity, Graphic Designer, Branding, Logo Design, Web Design"],
  category: "design services",
  openGraph: {
    title: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
    description: "Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen.",
    url: "https://www.artentii.com/",
    siteName: "artentii.com",
    images: [
      {
        url: "https://www.artentii.com/opengraph/opengraph-image.jpg",
        width: "1200",
        height: "630",
        alt: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
    description: "Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen.",
    site: "@Artentii",
    images: [
      {
        url: "https://www.artentii.com/opengraph/opengraph-image.jpg",
        alt: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
      },
    ],
  },
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-light dark:bg-dark text-gray dark:text-white">
        <Providers>
          <div className="noise"></div>
          <BackToTopButton />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
