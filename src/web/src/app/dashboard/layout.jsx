'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }) {

  const pathname = usePathname()

  return (
    <div className='bg-teal-600 p-4'>
      {pathname === '/dashboard' ? '' : <Link href="/dashboard" className='mt-8 ml-2 font-bold text-xl text-teal-600 px-2 py-1 border-2 border-teal-600 rounded-lg bg-white hover:bg-teal-500 hover:text-white text-center'><span className='inline-block break-keep w-[100px]'>VOLTAR</span></Link>}
      {children}
    </div>
  )
}