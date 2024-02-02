import { CalendarClock, CalendarDays, CircleDollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Overview } from './Overview'

export default function Dashboard() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="">
        <h1 className="font-semibold">Dashboard</h1>
        <section className="my-4 flex flex-col gap-4 items-center justify-center md:grid md:grid-cols-3">
          <Card>
            <CardHeader className="flex-row gap-4 items-center justify-between">
              <CardTitle className="text-lg text-wrap">
                Generated this month
              </CardTitle>
              <CalendarDays className="w-8 h-8" />
            </CardHeader>

            <CardContent className="grid gap-6">
              <h2>$235</h2>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row gap-4 items-center justify-between">
              <CardTitle className="text-lg text-wrap">
                Generated last month
              </CardTitle>
              <CalendarClock className="w-8 h-8" />
            </CardHeader>

            <CardContent className="grid gap-6">
              <h2>$540</h2>
            </CardContent>
          </Card>
          <Card className="min-w-[292px] md:min-w-fit">
            <CardHeader className="flex-row gap-4 items-center justify-between">
              <CardTitle className="text-lg text-wrap">
                Money invested
              </CardTitle>
              <CircleDollarSign className="w-8 h-8" />
            </CardHeader>

            <CardContent className="grid gap-6">
              <h2>$5680</h2>
            </CardContent>
          </Card>
        </section>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
