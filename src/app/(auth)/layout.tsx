import { Roboto } from 'next/font/google'
import '@/assets/globals.css'
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast'
import {DashLayout} from '@/app/(auth)/ui'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';
import { GoogleAnalyticsTracking } from '@/components/GoogleAnalyticsTracking';

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  if(!session) {
    redirect("/auth/signin")
  }

  return (
    <html lang="en">
      <GoogleAnalyticsTracking id='AW-11201933819' />
      <body className={`bg-slate-50 min-h-screen pt-10 ${roboto.className}`}>
        <Toaster />
        <DashLayout>
          {children}
        </DashLayout>
      </body>
    </html>
  )
}
