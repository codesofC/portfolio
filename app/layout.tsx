import ChangeLanguage from "@/components/ChangeLanguage";
import Footer from "@/components/Footer";
import LanguageContext from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Judelin Inélus",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative overflow-x-hidden">
      <body>
        <LanguageContext>
          <Navbar />
          <ChangeLanguage />
          {children}
          <Footer />
        </LanguageContext>
      </body>
    </html>
  );
}
