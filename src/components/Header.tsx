import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <header className="py-8 mx-8">
      <nav className="flex justify-between">
        <p className="font-bold">TrackR</p>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/signup"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Sign up
            </Link>
          </li>
          <li>
            <Button>
              <Link href="/login">Log in</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
