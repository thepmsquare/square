import type { Metadata } from "next";

import "../stylesheets/globals.css";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "square",
  description: "List of Repositories (square)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
