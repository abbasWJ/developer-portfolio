import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abbas | Software Engineer",
  description:
    "Software engineer building reliable backend systems, APIs, and AI-powered automation.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abbas | Software Engineer",
    description:
      "Backend engineering, scalable APIs, and practical automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
