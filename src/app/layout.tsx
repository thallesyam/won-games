import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import StyledComponentsRegistry from '@/app/lib/registry'
import { Providers } from '@/app/providers'

const poppins = Poppins({ weight: ['600', '400', '300'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
