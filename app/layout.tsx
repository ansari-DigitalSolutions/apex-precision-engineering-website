import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Apex Precision Engineering",
    template: "%s | Apex Precision Engineering",
  },
  description:
    "Precision engineering and CNC manufacturing solutions for demanding industrial applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
