import { Footer } from "./Footer"
import { Sidebar } from "./Sidebar" 
import { ReactNode } from "react"

export const LayoutHome = ({ children }: { children: ReactNode }) => 
{
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Sidebar />
      <main className="lg:ml-64 min-h-screen">
        {children}
        <Footer />
      </main>
    </div>
  )
}

