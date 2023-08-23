import DesktopSidebar from "./DesktopSidebar";

export async function Sidebar({ children }: { children: React.ReactNode }) {
 return (
  <div className="h-full bg-gray-800">
   <DesktopSidebar />

   <main className="lg:pl-20 h-full">{children}</main>
  </div>
 );
}
