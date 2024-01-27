import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { useLoginStatus } from '@/app/store/loginStatus'
import { auth } from '../app/firebase'
import { useEffect } from 'react'

export default function Header() {
  const {isLoggedIn, onChangeStatus} = useLoginStatus()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onChangeStatus(true)
      } else {
        onChangeStatus(false)
      }
    })
  }, [onChangeStatus])

  function logout() {
    return auth.signOut()
  }

  return (
    <header className="py-8 mx-8">
      <nav className="flex justify-between">
        <p className="font-bold">
          <Link href={'/'}>TrackR</Link>
        </p>
        {isLoggedIn ? (
          <ul className="flex gap-4">
            <li>
              <Button onClick={logout} variant={'outline'}>
                Log out
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </li>
          </ul>
        ) : (
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
        )}
      </nav>
    </header>
  )
}
