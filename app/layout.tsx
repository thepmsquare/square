import type { Metadata } from "next";

import "../stylesheets/globals.css";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "square | project index",
  description: "a curated list of repositories and server links by thepmsquare",
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
