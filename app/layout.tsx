import type { Metadata } from "next";
import { Noto_Sans_JP, Potta_One, Rubik_Doodle_Shadow } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const pottaOne = Potta_One({
  variable: "--font-potta-one",
  subsets: ["latin"],
  weight: "400",
});

const rubikDoodleShadow = Rubik_Doodle_Shadow({
  variable: "--font-rubik-doodle-shadow",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "新潟県地質調査業協会",
  description: "一般社団法人 新潟県地質調査業協会",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${pottaOne.variable} ${rubikDoodleShadow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
