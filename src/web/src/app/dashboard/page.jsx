import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <div className='w-screen h-full flex flex-wrap p-12 gap-10 justify-center'>
      <Link href="/dashboard/calculadora-imc">
        <div className='w-[520px] h-[520px] bg-teal-900 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
          <h2 className="text-white text-3xl font-bold">
          Calculadora IMC
          </h2>
          <button className='px-4 py-2 rounded-md bg-white text-blue-500 mt-4 block'>Entrar</button>
        </div>
      </Link>
      <Link href="/dashboard/historico-de-peso">
      <div className='w-[520px] h-[520px] bg-teal-900 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
        <h2 className="text-white text-3xl font-bold">
        Histórico de Peso
        </h2>
        <button className='px-4 py-2 rounded-md bg-white text-blue-500 mt-4 block'>Entrar</button>
      </div>
      </Link>
      <Link href="/dashboard/consumo-de-agua">
      <div className='w-[520px] h-[520px] bg-teal-900 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
        <h2 className="text-white text-3xl font-bold">
        Registro de Consumo de Água
        </h2>
        <button className='px-4 py-2 rounded-md bg-white text-blue-500 mt-4 block'>Entrar</button>
      </div>
      </Link>
      <Link href="/dashboard/diario-de-alimentacao">
      <div className='w-[520px] h-[520px] bg-teal-900 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
        <h2 className="text-white text-3xl font-bold">
        Diário de Alimentação
        </h2>
        <button className='px-4 py-2 rounded-md bg-white text-blue-500 mt-4 block'>Entrar</button>
      </div>
      </Link>
      <Link href="/dashboard/atividade-fisica">
      <div className='w-[520px] h-[520px] bg-teal-900 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
        <h2 className="text-white text-3xl font-bold">
        Registro de Atividade Física
        </h2>
        <button className='px-4 py-2 rounded-md bg-white text-blue-500 mt-4 block'>Entrar</button>
      </div>
      </Link>
      <Link href="/dashboard/metas">
      <div className='w-[520px] h-[520px] bg-teal-900 flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white hover:scale-[1.05] transition-transform duration-1000'>
        <h2 className="text-white text-3xl font-bold">
        Metas SMART
        </h2>
        <button className='px-4 py-2 rounded-md bg-white text-blue-500 mt-4 block'>Entrar</button>
      </div>
      </Link>
    </div>
  )
}

export default Dashboard