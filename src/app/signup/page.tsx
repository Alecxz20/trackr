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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

const formSchema = z
  .object({
    username: z.string().min(3),
    emailAddress: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm
    },
    {
      message: "Password don't match",
      path: ['passwordConfirm'],
    }
  )

type Data = {
  username: string
  emailAddress: string
  password: string
  passwordConfirm: string
}

async function signUp(values: Data) {
  await createUserWithEmailAndPassword(
    auth,
    values.emailAddress,
    values.password
  )

  await setDoc(
    doc(db, 'users', `${auth.currentUser?.uid}`),
    {
      username: values.username,
      email: values.emailAddress,
    },
    { merge: true }
  )
}

export default function SignUpPage() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      emailAddress: '',
      password: '',
      passwordConfirm: '',
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    signUp(values)
    router.push('/')
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
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="username"
                      type="text"
                      placeholder="Type your username"
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
                      autoComplete="new-password"
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
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password Confirm</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="new-password"
                      type="password"
                      placeholder="Repeat your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button type="submit">Create Account</Button>
        </form>
      </Form>
    </main>
  )
}
