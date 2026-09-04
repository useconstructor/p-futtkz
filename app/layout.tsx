import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788549601330',
  description: 'A warm, editorial wellness website for Serenity Yoga Studios that drives class bookings, membership signups, and trust through instructor profiles, flexible scheduling, testimonials, and a welcoming studio story. The experience balances serene visual storytelling with practical tools for busy professionals to find and reserve the right class.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F5F1E8', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
