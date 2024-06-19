import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Appendix C",
  description: "App Route Example",
};

export default function RootLayout(props: LayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <span className="flag">app/layout(.tsx)</span>
          {props.children}
        </section>
      </body>
    </html>
  );
}
