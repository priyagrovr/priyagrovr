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
    default:
      "Priya Grover | Senior Full Stack Developer | React, Next.js, AI Expert",
    template: "%s | Priya Grover — Full Stack Developer",
  },
  description:
    "Priya Grover — Senior Full Stack Developer & Freelancer with 13+ years of experience. Specializing in React, Next.js, Node.js, Python, Django, React Native, TypeScript, and AI/LLM integrations. Available for hire — Mohali, Punjab, India.",
  keywords: [
    "Priya Grover",
    "Priya Grover developer",
    "Priya Grover portfolio",
    "Senior Full Stack Developer",
    "Full Stack Developer India",
    "Freelance Full Stack Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Django Developer",
    "TypeScript Developer",
    "AI Developer",
    "LLM Integration Developer",
    "React Native Developer",
    "Web Developer Mohali",
    "Web Developer Punjab India",
    "Hire Full Stack Developer",
    "Freelance Web Developer India",
    "Laravel Developer",
    "PHP Developer",
    "WordPress Developer",
    "SaaS Developer",
    "E-Commerce Developer",
    "AWS Developer",
    "Remote Full Stack Developer",
  ],
  authors: [{ name: "Priya Grover", url: siteUrl }],
  creator: "Priya Grover",
  publisher: "Priya Grover",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Priya Grover — Senior Full Stack Developer",
    title: "Priya Grover | Senior Full Stack Developer & AI Expert",
    description:
      "Senior Full Stack Developer with 13+ years building scalable web & mobile applications. Expert in React, Next.js, Node.js, Python, Django, AI/LLM. Available for freelance projects.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Priya Grover — Senior Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Grover | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 13+ years of experience. React, Next.js, Node.js, Python, AI/LLM expert. Available for freelance work.",
    creator: "@priyagrover",
    images: [`${siteUrl}/og-image.png`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Priya Grover",
    givenName: "Priya",
    familyName: "Grover",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    email: "priya.grover1988@gmail.com",
    telephone: "+917355113377",
    jobTitle: "Senior Full Stack Developer",
    description:
      "Freelance Senior Full Stack Developer with 13+ years of experience building scalable, production-ready web and mobile applications. Specializing in React, Next.js, Node.js, Python, Django, and AI/LLM integrations.",
    knowsAbout: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Django",
      "PHP",
      "Laravel",
      "WordPress",
      "Tailwind CSS",
      "AWS",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "OpenAI",
      "AI/LLM Integration",
      "REST APIs",
      "GraphQL",
    ],
    knowsLanguage: ["English", "Hindi", "Punjabi"],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Punjab University Regional Centre for Information Technology & Management",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Master of Computer Applications (MCA)",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://github.com/priyagrovr",
      "https://linkedin.com/in/priyagrover",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sahibzada Ajit Singh Nagar",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Priya Grover — Senior Full Stack Developer Portfolio",
    description:
      "Personal portfolio of Priya Grover, a Senior Full Stack Developer with 13+ years of experience.",
    publisher: { "@id": `${siteUrl}/#person` },
    inLanguage: ["en", "fr", "de", "es", "nl", "it", "hi", "pa"],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Priya Grover Portfolio",
    mainEntity: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    dateCreated: "2026-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  const jsonLdArray = [
    personSchema,
    websiteSchema,
    profilePageSchema,
    breadcrumbSchema,
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {jsonLdArray.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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
