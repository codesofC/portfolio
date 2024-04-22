import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Exo_2 } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Judelin Inélus • Software Developer",
  description: "Web and Mobile Developer FrontEnd",
};

const Exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-caption'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, Exo2.variable, GeistMono.variable,"font-sans relative overflow-x-hidden bg-background text-foreground")}>
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
