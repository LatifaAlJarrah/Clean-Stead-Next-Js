
import Sidebar from "./dashboard/Sidebar";
import Header from "./dashboard/Header";
import DashboardStats from "./dashboard/DashboardStats";
import Graph from "./dashboard/Graph";
import RecentActivities from "./dashboard/RecentActivities";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className=" bg-gray-100 p-4">
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <DashboardStats />
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-4">
            <Graph />
            <RecentActivities />
          </div>
        </main>
      </div>
    </div>
  );
}
