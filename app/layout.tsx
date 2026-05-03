import type { Metadata } from "next";

import "../stylesheets/globals.css";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "square services | project index",
  description: "project index for square services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
