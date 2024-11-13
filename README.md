- Create `.env.local` and add your Clerk keys
- Run `npm install`
- Run `npm run dev`

---

`layout.tsx`

```tsx
import './globals.css'
import { Providers } from '@/app/Providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  )
}
```

`Providers.tsx`

```tsx
'use client'

import { ClerkProvider } from '@clerk/nextjs'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>
}
```

`page.tsx`

```tsx
import { Example } from '@/app/Example'

export default function Home() {
  return <Example />
}
```

`Example.tsx`

```tsx
'use client'

import { useAuth } from '@clerk/nextjs'

export function Example() {
  const auth = useAuth()
  return <pre>{JSON.stringify(auth, null, 2)}</pre>
}
```
