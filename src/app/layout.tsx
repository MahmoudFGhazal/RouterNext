import type { Metadata } from "next";
import "./styles/globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Project-Router",
  description: "Site para Estudar funcionalidades do Next",
  keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
  openGraph: {
    images: ['https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png', 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2024/07/11/shreak_5.png'],
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true, 
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
