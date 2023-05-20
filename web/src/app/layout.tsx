import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable:'--fonts-  roboto' });
const baijamjuree= BaiJamjuree({subsets: ['latin'], weight:'700', variable:'--fonts-Bai-jamjuree'})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo feita com react, next, taiwindCSS e typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
