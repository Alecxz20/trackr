import Sidebar from '@/components/Sidebar'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loans | Trackr',
  description:
    'Manage, record and track the performance of your loans efficiently',
}

export default function page() {
  return (
    <div className={cn('min-h-screen w-full flex')}>
      {/* sidebar */}
      <Sidebar />
      {/* main page */}
      <div className="p-8 w-full">Loans</div>
    </div>
  )
}
