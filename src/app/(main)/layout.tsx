import { Menu } from "@/components/menu"
import { Sidebar } from "@/components/sidebar"
import { playlists } from "@/data/playlists"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col">
      <Menu />
      <div className="border-t bg-background flex-grow grid lg:grid-cols-5 overflow-hidden">
        <Sidebar playlists={playlists} className="hidden lg:block overflow-y-auto" />
        <div className="col-span-5 lg:col-span-4 lg:border-l overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
