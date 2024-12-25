import "./globals.css";

import { DailySideBar } from "./components/DailySideBar/DailySideBar";
import { DailyTopBar } from "./components/DailyTopBar/DailyTopBar";
import { DailyControlBar } from "./components/DailyControlBar/DailyControlBar";

export default function RootLayout({ children }) {
const userLoggedIn = false;
  return (
    <html lang="en">
      <body className="flex h-screen">
        <DailySideBar />
        <div className="flex-1 flex flex-col">
          <DailyTopBar />
          <div className="flex">
            <div className="flex-1 bg-bodyBg px-10 py-12">
              {children}
            </div>
            <DailyControlBar />
          </div>
        </div>
      </body>
    </html>
  );
}
