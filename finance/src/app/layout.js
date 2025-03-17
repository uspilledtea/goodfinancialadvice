import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coin Craze",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ...existing code... */}
      </head>
      <body>
        <div className={`${geistSans.variable} ${geistMono.variable} hhh`}>
          <SessionProvider>
          <div className="sidebar">
              <Sidebar />
              </div>
            <div className="container">
              
              {children}
            </div>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
