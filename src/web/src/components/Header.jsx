'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'

export function Header() {
  const path = usePathname()

  
  return (
    <nav className='relative flex flex-row justify-between items-center gap-10 mx-10 min-h-[100px]'>
      <Link href="/"  className='ml-10'><Image src="/nutripuc-logo.png" height="100" width="120" alt="Logo Nutripuc" /></Link>

      <Link href="/sign-up" className='mx-10 font-bold text-xl text-teal-600 px-4 py-2 border-2 border-teal-600 rounded-lg bg-white hover:bg-teal-500 hover:text-white text-center'><span className='inline-block break-keep w-[100px]'>{ (path === '/') | (path === '/sign-up') ? 'SIGN UP' : 'LOG OUT'}</span></Link>
    </nav>
  )
}
