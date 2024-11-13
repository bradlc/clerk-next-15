'use client'

import { useAuth } from '@clerk/nextjs'

export function Example() {
  const auth = useAuth()
  return <pre>{JSON.stringify(auth, null, 2)}</pre>
}
