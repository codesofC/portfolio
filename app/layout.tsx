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
      <div className="absolute h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[5%] right-[10%] top-[-7%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
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
