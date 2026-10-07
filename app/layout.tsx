import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurelia — Independent Creative Studio",
  description:
    "Aurelia is an independent creative studio shaping identities, digital experiences, and cultural stories.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
