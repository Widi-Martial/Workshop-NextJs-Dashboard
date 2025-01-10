import '@/app/ui/global.css'
import { inter } from '@/app/ui/font';
import { Metadata } from 'next';

export const metatada : Metadata = {
  title: {
    default: "Acme Dashboard",
    template: "%s | Acme Dashboard",
  },
  description: 'The offical Next.js Course Dashboard, built with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialisased`}>{children}</body>
    </html>
  );
}
