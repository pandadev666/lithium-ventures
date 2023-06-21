import './globals.css'
import Banner from '@/app/banner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-purple-500">
      <Banner />
      {children}
    </main>
  )
}
