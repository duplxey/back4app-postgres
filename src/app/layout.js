"use client";

import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Container from "@/app/components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
