import DashboardHeader from '@/components/dashboard-header'
import Sidebar from '@/components/sidebar'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="w-full">
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}
