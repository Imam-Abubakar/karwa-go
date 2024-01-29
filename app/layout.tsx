
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Outfit } from 'next/font/google'
import NavBar from '@/components/NavBar'


const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karwa Go',
  description: 'Developed by Imam Abubakar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <NavBar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
