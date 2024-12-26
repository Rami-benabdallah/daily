import { DailySideBar } from "../components/DailySideBar/DailySideBar";
import { DailyTopBar } from "../components/DailyTopBar/DailyTopBar";
import { DailyControlBar } from "../components/DailyControlBar/DailyControlBar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex h-screen w-screen">
      <DailySideBar />
      <div className="flex-1 flex flex-col">
        <DailyTopBar />
        <div className="h-screen bg-bodyBg px-10 py-12">
            {children}
        </div>
      </div>
      <DailyControlBar />
    </div>
  );
}
