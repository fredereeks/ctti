import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css';
import { Header, Footer } from '@/components'
import { Toaster } from 'react-hot-toast'
import ClientLayout from '@/components/ClientLayout'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: 'CTTI e-learning Centre :: Home of IT Knowledge',
  description: 'At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 pt-10 ${roboto.className}`}>
        <Toaster />
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
