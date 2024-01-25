import {Outfit} from 'next/font/google'

// Components
import NavBar from "./components/base/navbar";
import Footer from "./components/base/footer";

import "./globals.css";

export const metadata = {
  title: "Artentii • Web Developer & Graphic Designer",
  description: "Generated by create next app",
};

const outfit = Outfit({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-light dark:bg-dark">
        <div className="noise"></div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
