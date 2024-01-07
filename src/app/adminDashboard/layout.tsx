"use client";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-abn-50 text-abn-800">
      <Sidebar />

      <div className="p-7 grow">{children}</div>
    </div>
  );
}
