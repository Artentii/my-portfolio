import { Outfit } from "next/font/google";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

// Components
import NavBar from "./components/base/navbar";
import Footer from "./components/base/footer";
import BackToTopButton from "./components/BackToTopButton";

import "./globals.css";

export const metadata = {
  title: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
  description: "Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen.",
  keywords: "Visual Identity, Graphic Designer, Branding, Logo Design, Web Design",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <Head>
        <title>Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii</title>
        <meta name="description" content="Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen." />
        <meta name="keywords" content="Visual Identity, Graphic Designer, Branding, Logo Design, Web Design" />
        <meta property="og:url" content="https://www.artentii.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii"/>
        <meta property="og:description" content="Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen."/>
        <meta property="og:image" content="https://my-portfolio-ld737ne0s-artentii.vercel.app/opengraph-image.jpg?833af47f10b26bb6"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="artentii.com"/>
        <meta property="twitter:url" content="https://www.artentii.com/"/>
        <meta name="twitter:title" content="Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii"/>
        <meta name="twitter:description" content="Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen."/>
        <meta name="twitter:image" content="https://my-portfolio-ld737ne0s-artentii.vercel.app/opengraph-image.jpg?833af47f10b26bb6"/>
      </Head>
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
