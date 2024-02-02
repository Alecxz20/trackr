'use client'

import {
  ChevronRight,
  DollarSign,
  LayoutDashboard,
  UsersRound,
} from 'lucide-react'
import { Nav } from './ui/nav'
import { Button } from './ui/button'
import { useIsCollapsed } from '@/store/isCollapsed'
import { useWindowWidth } from '@react-hook/window-size'

export default function Sidebar() {
  const { isCollapsed, changeStatus } = useIsCollapsed()

  const windowWidth = useWindowWidth()
  const mobileWidth = windowWidth < 768

  function toggleSidebar() {
    changeStatus(isCollapsed)
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant={'secondary'}
            className="rounded-[4px] p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            href: '/dashboard',
            title: 'Overview',
            icon: LayoutDashboard,
            variant: 'default',
          },
          {
            href: '/loans',
            title: 'Loans',
            icon: DollarSign,
            variant: 'ghost',
          },
          {
            href: '/clients',
            title: 'Clients',
            icon: UsersRound,
            variant: 'ghost',
          },
        ]}
      />
    </div>
  )
}
