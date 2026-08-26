import type { Metadata } from "next";
import { FilloutProvider } from "@/components/FilloutProvider";
// import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    {
      path: "../fonts/display/Classica-Book.ttf",
      weight: "400",
    },
    {
      path: "../fonts/display/Classica-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-display",
});

const body = localFont({
  src: [
    {
      path: "../fonts/body/hanken_grotesk/HankenGrotesk-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/body/hanken_grotesk/HankenGrotesk-SemiBold.ttf",
      weight: "700",
    },
    {
      path: "../fonts/body/hanken_grotesk/HankenGrotesk-Bold.ttf",
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