import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Figtree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · 个人作品集`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.title}。${profile.summary}`,
  keywords: [profile.name, "作品集", "UX", "Portfolio", "Google UX"],
  authors: [{ name: profile.name }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${profile.name} · 个人作品集`,
    description: profile.summary,
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · 个人作品集`,
    description: profile.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
