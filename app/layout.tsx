import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { socialLinks } from '@/components/footer-social-link/FooterSocialLink.constants';
import { FooterSocialLink } from '@/components/footer-social-link/FooterSocialLink';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phil Stubbs Development',
  description: 'Hungry & Driven Fullstack Engineer Solving Complex Problems',
};

export default function RootLayout({
  children,
  contact,
  projects,
  about,
}: Readonly<{
  children: React.ReactNode;
  contact: React.ReactNode;
  projects: React.ReactNode;
  about: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={'flex flex-col min-h-dvh'}>
          {children}
          {about}
          {projects}
          {contact}
          <footer className="flex flex-col gap-4 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
            <div className="flex items-center gap-4">
              {socialLinks.map((socialLink) => (
                <FooterSocialLink
                  href={socialLink.href}
                  icon={socialLink.icon}
                  key={socialLink.href}
                  label={socialLink.label}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {year} Phil Stubbs Development. All rights reserved.
            </p>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
