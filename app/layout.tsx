import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C-Red Tuning - Japanese Import Car Tuning and Service Specialists (Perth, Western Australia)',
  description: 'C-Red Tuning is one of the oldest specialist Japanese Import Tuning Houses in Australia. We offer performance upgrades, bodykits, wheels, and extensive service for Japanese sports cars.',
  keywords: 'japanese, import, perth, western australia, drift, parts, turbo, nissan, toyota, silvia, skyline, chaser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}