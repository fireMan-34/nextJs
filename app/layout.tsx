import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomMenu from "@/components/BottomMenu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  userMenu,
}: Readonly<{
  children: React.ReactNode;
  userMenu: React.ReactNode;
}>) {
  // only use server
  console.log(`Route mode: ${process.env.ROUTE_MODE}`);
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${inter.className} pb-9 shadow-inner shadow-red-300`}>
        <h2 className="font-extrabold text-center text-6xl text-red-700">
          Route Layout
        </h2>
        {userMenu}
        {children}
        <BottomMenu />
      </body>
    </html>
  );
}
