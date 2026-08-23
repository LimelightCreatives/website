import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    {
      path: "../fonts/Classica-Book.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Classica-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-display",
});

const body = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.otf",
      weight: "700",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.otf",
      weight: "900",
    },
  ],
  variable: "--font-body",
});

// const body = localFont({
//   src: "../fonts/Rounded Elegance Regular.otf",
//   variable: "--font-body",
// });

export const metadata: Metadata = {
  title: "Limelight Creatives",
  description: "Limelight Creatives runs free film-a-thons for high schoolers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}