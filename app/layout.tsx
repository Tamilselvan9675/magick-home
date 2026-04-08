import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';

export const metadata = {
  title: 'MagickHome | Premium Experience',
  description: 'A premium architecture and design experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />
        <SmoothScroll>
          <div className="pt-24 md:pt-32">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}