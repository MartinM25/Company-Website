import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zim Scholars Trust",
  description: "Study Abroad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen mt-24 bg-white font-poppins" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
