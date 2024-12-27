import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});


import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";

export default function RootLayout({ children }) {
const userLoggedIn = true;
  return (
    <html lang="en">
      <body className={roboto.className}>
        {userLoggedIn ? (
          <AuthenticatedLayout>{children}</AuthenticatedLayout>
        ) : (
          <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
        )}
      </body>
    </html>
  );
}
