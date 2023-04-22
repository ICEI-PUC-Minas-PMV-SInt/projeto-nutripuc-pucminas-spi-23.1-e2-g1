import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <div className='w-screen h-full flex flex-wrap p-12 gap-10 justify-start'>
      <Link href="/dashboard/calculadora-imc">
        <div className='w-[520px] h-[520px] bg-teal-900 rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
          Calculadora IMC
        </div>
      </Link>
      <Link href="/dashboard/historico-de-peso">
      <div className='w-[520px] h-[520px] bg-teal-900 rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000 '>
        Histórico de Peso
      </div>
      </Link>
      <Link href="/dashboard/consumo-de-agua">
      <div className='w-[520px] h-[520px] bg-teal-900 rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000 '>
        Registro de Consumo de Água
      </div>
      </Link>
      <Link href="/dashboard/diario-de-alimentacao">
      <div className='w-[520px] h-[520px] bg-teal-900 rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000 '>
        Diário de Alimentação
      </div>
      </Link>
      <Link href="/dashboard/atividade-fisica">
      <div className='w-[520px] h-[520px] bg-teal-900 rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000 '>
        Registro de Atividade Física
      </div>
      </Link>
      <Link href="/dashboard/metas">
      <div className='w-[520px] h-[520px] bg-teal-900 rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000 '>
        Metas SMART
      </div>
      </Link>
    </div>
  )
}

export default Dashboard