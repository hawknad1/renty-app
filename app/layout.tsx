import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProvider from "@/components/ClientProvider";

import React from "react";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Real Estate App",
  description: "Buy, Sell and Rent a property today",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <ClientProvider>
        <html lang="en">
          <body className={poppins.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <main className=" bg-[#f8f8f8] dark:filter dark:bg-gray-900">
                {children}
              </main>
            </ThemeProvider>
            <footer>
              <Footer />
            </footer>
          </body>
        </html>
      </ClientProvider>
    </React.Fragment>
  );
}
