import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const text = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-text",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imreguaglianone.com"),
  title: {
    default:
      "Imre Guaglianone — Experience designer, researcher, founder",
    template: "%s — Imre Guaglianone",
  },
  description:
    "Imre Guaglianone designs products and runs research for organisations that need to make defensible decisions about their experiences. Based in Bologna, working across Europe.",
  openGraph: {
    type: "website",
    title: "Imre Guaglianone — Experience designer, researcher, founder",
    description:
      "Designs products and runs research for organisations that need to make defensible decisions about their experiences.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imre Guaglianone",
    description:
      "Experience designer, researcher and founder. Based in Bologna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${text.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
