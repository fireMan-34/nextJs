import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  bottomMenu,
  userMenu,
}: Readonly<{
  children: React.ReactNode;
  bottomMenu: React.ReactNode;
  userMenu: React.ReactNode;
}>) {
  // only use server
  console.log(`Route mode: ${process.env.ROUTE_MODE}`);
  return (
    <html lang="en">
      <body className={`${inter.className} pb-9`}>
        <h2>Route Layout</h2>
        <h3>Slot</h3>
        {userMenu}
        {children}
        {bottomMenu}
      </body>
    </html>
  );
}