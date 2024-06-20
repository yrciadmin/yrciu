import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavBar from "./NavBar";
import Footer from "./Footer";
import "animate.css";
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "YRCI-U: Bridging Federal HR Skill Gap ",
  description: "Refine your skills through YRCI University's expert-led training for Federal HR professionals. Our programs foster engagement and close the skill gap. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <NavBar/>
          <main className="yrciu">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
