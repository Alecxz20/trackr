'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const formSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(8),
})

type Data = {
  emailAddress: string
  password: string
}

export default function LogInPage() {
  const router = useRouter()

  async function login(values: Data) {
    await signInWithEmailAndPassword(auth, values.emailAddress, values.password)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
    },
  })
  async function handleSubmit(values: z.infer<typeof formSchema>) {
    router.push('/')
    await login(values)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-[90%] mx-auto flex flex-col gap-4 border px-4 py-12"
        >
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Type your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Type your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button type="submit">Log in</Button>
        </form>
      </Form>
    </main>
  )
}
