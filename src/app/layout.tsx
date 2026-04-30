import type { Metadata } from "next";
import type { ReactNode } from 'react';
import { Roboto } from 'next/font/google'
import './globals.css';
import { Header } from '@components/layout/Header';
import { Container } from '@components/ui/container';
import { CatalogHeader } from '@components/layout/CatalogHeader';

const roboto = Roboto({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Created by Manykha Kirill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className='bg-gray-100 text-gray-900'>
          <Header />
          <main className="flex">
            <Container>
              <CatalogHeader/>
              {children}
            </Container>
          </main>
      </body>
    </html>
  );
}
