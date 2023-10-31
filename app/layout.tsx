import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Zona from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProvider from "@/components/ClientProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

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
            <div className="h-screen bg-[#f8f8f8] dark:filter dark:bg-gray-900">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClientProvider>
  );
}
