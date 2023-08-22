import { Sidebar } from "../components/sidebar";

export default async function AnimeListlayout({ children }: { children: React.ReactNode }) {
 return (
  <Sidebar>
   <div className="h-full">{children}</div>
  </Sidebar>
 );
}
