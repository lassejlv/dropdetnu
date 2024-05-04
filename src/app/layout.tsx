import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const pop = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drop det nu",
  description: "Drop Det Nu - Sæt et mål for din vægttab eller noget andet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={pop.className}>{children}</body>
    </html>
  );
}
