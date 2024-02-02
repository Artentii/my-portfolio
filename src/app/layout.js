import { Outfit } from "next/font/google";
import Providers from "./providers";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/react";

// Components
import NavBar from "./components/base/navbar";
import Footer from "./components/base/footer";

import "./globals.css";

export const metadata = {
  title: "Graphic Design | Brand Identity | Web Design & Dev - Marina Terentii",
  description: "Ready to bring your ideas to life? Transform your brand's visual identity and elevate your online game. Your vision, our design - let's make it happen.",
  keywords: "Visual Identity, Graphic Designer, Branding, Logo Design, Web Design",
  openGraph: {
    images: { url: "/opengraph-image.jpg" },
  },
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-light dark:bg-dark text-gray dark:text-white">
        <Providers>
          <div className="noise"></div>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
