import {ToastProvider, ToastViewport } from "@/components/ui/toast";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

// Optimized Inter font import
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // avoids flash of unstyled text
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bibin Biju – Frontend Engineer | React.js • Next.js • TypeScript",
  description:
    "Senior Software Engineer with 6+ years of experience in React.js, TypeScript, Next.js, and Three.js. Building scalable web applications.",
  keywords: [
    "React Developer",
    "Frontend Engineer",
    "TypeScript",
    "Next.js",
    "Three.js",
  ],
  openGraph: {
    title: "Bibin Biju – Frontend Engineer | React.js • Next.js • TypeScript",
    description:
      "6+ years of experience in frontend development with React.js, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://bibinbiju.github.io",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="rbqp_YZ0ijZbUS2UhVxLPmwQGmcmV-lwePFOaRp_8wc" />
      <body className={`${inter.variable} antialiased`}>
        {children}
        {/* Font Awesome external stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <Toaster/>
      </body>
    </html>
  );
}
