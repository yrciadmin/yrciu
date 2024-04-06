import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
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
      <body className={` ${roboto.className}`}>
        {/* <NavBar/> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
