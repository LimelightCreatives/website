import type { Metadata } from "next";
import { FilloutProvider } from "@/components/FilloutProvider";
// import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";
import "./globals.css";

const wordmark = localFont({
  src: "../fonts/display/Autolova.woff2",
  variable: "--font-wordmark",
});

const display = localFont({
  src: [
    {
      path: "../fonts/display/Classica-Book.woff2",
      weight: "400",
    },
    {
      path: "../fonts/display/Classica-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-display",
});

const body = localFont({
  src: [
    {
      path: "../fonts/body/hanken_grotesk/HankenGrotesk-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/body/hanken_grotesk/HankenGrotesk-SemiBold.woff2",
      weight: "700",
    },
    {
      path: "../fonts/body/hanken_grotesk/HankenGrotesk-Bold.woff2",
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
  title: "Limelight Creatives - Teen Filmmaking Event in Sydney",
  description: "Limelight Creatives runs free film-a-thons for high schoolers; no experience needed!",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FilloutProvider>
          {children}
        </FilloutProvider>
      </body>
    </html>
  );
}