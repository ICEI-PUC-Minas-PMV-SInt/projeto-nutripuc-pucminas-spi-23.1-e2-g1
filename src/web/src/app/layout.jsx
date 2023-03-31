import { Header } from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Nutripuc',
  description: 'Projeto criado pela equipe 2 do eixo 2 do curso de graduação em Sistemas Para Internet',
  icons: {
    icon: {
      url: '/nutripuc-logo.png', type: 'image/png'
    },
    shortcut: {
      url: '/nutripuc-logo.png', type: 'image/png'
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className='bg-teal-100'>
        <Header />
        {children}
      </body>
    </html>
  )
}
