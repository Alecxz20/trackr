import Sidebar from '@/components/Sidebar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import Dashboard from '@/components/Dashboard'

export const metadata: Metadata = {
  title: 'Dashboard | Trackr',
  description:
    'Manage, record and track the performance of your loans efficiently',
}

export default function page() {
  return (
    <div className={cn('min-h-screen w-full flex')}>
      <Sidebar />

      <Dashboard />
    </div>
  )
}
