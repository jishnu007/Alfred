"use client";
import "./globals.css";
import { Poppins } from "@next/font/google";
import { AuthContextProvider } from "./context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={poppins.className}>{children}</body>
      </AuthContextProvider>
    </html>
  );
}
