import { Sidebar } from "../components/sidebar";

export default async function AnimeWorldlayout({ children }: { children: React.ReactNode }) {
 return (
  <Sidebar>
   <div className="h-full bg-gray-800">{children}</div>
  </Sidebar>
 );
}
