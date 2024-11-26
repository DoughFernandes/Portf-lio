import type { Metadata } from "next";
import { Kanit } from 'next/font/google';
import "./scss/layout.scss";

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Douglas Fernandes portfólio",
  description: "Portfolio of Douglas Fernandes, web developer",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body className={kanit.className}>
        {children}
      </body>
    </html>
  );
}
