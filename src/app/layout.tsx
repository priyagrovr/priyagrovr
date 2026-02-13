import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://priyagrover.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priya Grover | Senior Full Stack Developer",
    template: "%s | Priya Grover",
  },
  description:
    "Priya Grover — Senior Full Stack Developer with 13+ years of experience building scalable web & mobile applications. Expert in React, Next.js, Node.js, Python, Django, and AI/LLM integrations.",
  keywords: [
    "Priya Grover",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Django Developer",
    "Freelance Developer",
    "AI Developer",
    "Web Developer India",
    "React Native Developer",
  ],
  authors: [{ name: "Priya Grover", url: siteUrl }],
  creator: "Priya Grover",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Priya Grover Portfolio",
    title: "Priya Grover | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 13+ years of experience. Expert in React, Next.js, Node.js, Python, Django, and AI integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Grover | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 13+ years of experience building scalable web & mobile applications.",
    creator: "@priyagrover",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Priya Grover",
    url: siteUrl,
    jobTitle: "Senior Full Stack Developer",
    description:
      "Freelance Full Stack Developer with 13+ years of experience building scalable web and mobile applications.",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Django",
      "React Native",
      "AWS",
      "AI/LLM Integration",
    ],
    sameAs: [
      "https://github.com/priyagrovr",
      "https://linkedin.com/in/priyagrover",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sahibzada Ajit Singh Nagar",
      addressRegion: "Punjab",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
