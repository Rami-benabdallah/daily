import "./globals.css";

import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";

export default function RootLayout({ children }) {
const userLoggedIn = true;
  return (
    <html lang="en">
      <body className="flex h-screen">
        {userLoggedIn ? (
          <AuthenticatedLayout>{children}</AuthenticatedLayout>
        ) : (
          <UnauthenticatedLayout>{children}</UnauthenticatedLayout>
        )}
      </body>
    </html>
  );
}
