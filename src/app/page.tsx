import SalesChart from "@/app/components/charts/SalesChart";

export default function DashboardPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Dashboard</h1>
      <SalesChart />
    </main>
  );
}