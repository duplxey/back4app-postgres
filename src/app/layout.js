"use client";

import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Container from "@/app/components/Container";
import Parse from "parse/dist/parse";
import ParseContext from "@/app/context/parseContext";

const inter = Inter({ subsets: ["latin"] });

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID,
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY,
);
Parse.serverURL = "https://parseapi.back4app.com/";

export default function RootLayout({ children }) {
  return (
    <ParseContext.Provider value={Parse}>
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          <Container>
            {children}
          </Container>
        </body>
      </html>
    </ParseContext.Provider>
  );
}
