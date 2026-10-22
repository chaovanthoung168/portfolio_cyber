import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chao Vanthoung | Software Developer",
  description:
    "Portfolio of Chao Vanthoung, a creative Full-Stack Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <ThemeProvider>
          <div className="scanlines"></div>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
