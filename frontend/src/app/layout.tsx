import { DM_Sans } from 'next/font/google'
import './globals.scss'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        {children}
      </body>
    </html>
  )
}
