import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';

const Noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vyapar Anusandhan Insights",
  description:
    "Get detailed market insights that accurately reflect current trends, consumer behavior, and competitive landscapes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Noto_sans.className} bg-slate-100`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
