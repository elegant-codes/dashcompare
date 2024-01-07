"use client";
import Sidebar from "@/components/Sidebar";
import AuthGuard from "../authGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex bg-abn-50 text-abn-800">
        <Sidebar />

        <div className="p-7">{children}</div>
      </div>
    </AuthGuard>
  );
}
