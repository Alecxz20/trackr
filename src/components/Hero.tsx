import Image from 'next/image'
import { Button } from './ui/button'
import heroImage from '../../public/ux-indonesia-8mikJ83LmSQ-unsplash-compressed.jpg'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 md:grid md:grid-cols-2 md:mt-32">
      <div className="w-[90%] mx-auto space-y-4">
        <h1>Manage your Loans with TrackR</h1>
        <p className="text-slate-400">
          Efficiently manage, record & track the performance of your loans.
        </p>
        <Button>
          <Link href="/signup">Register Now</Link>
        </Button>
      </div>
      <figure className="w-[90%] mx-auto mb-12">
        <Image priority={true} src={heroImage} alt="hero image" />
      </figure>
    </section>
  )
}
