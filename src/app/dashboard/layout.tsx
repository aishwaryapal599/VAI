import { redirect } from "next/navigation";

import { validateRequest } from "@/auth/validateRequest";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();
  if (!user) return redirect("/signin");

  if (user.role !== "admin") {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">403 Forbidden</h1>
        <p className="text-sm">
          You don&apos;t have permission to access this page.
        </p>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
