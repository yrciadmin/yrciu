import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
        <main className="yrciu min-h-[5577px] xs:min-h-[5425px] sm:min-h-[4931px]">{children}</main>
      </body>
    </html>
  );
}
