import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center">
          <h3 className='font-bold text-teal-600 text-5xl text-center p-2 m-4 mb-8'>Faça seu cadastro</h3>
      <div className='w-[320px] justify-self-center'>
        <form className='bg-teal-500/25 shadow-2xl p-10 border-2 border-teal-500/10 rounded-xl'>

          <label htmlFor="email" className='block text-teal-600 font-bold my-2 text-lg'>Email</label>
          <input type="text" placeholder="Seu melhor e-mail" id="email" className='w-full px-4 py-2 rounded-md' />

          <label htmlFor="password" className='block text-teal-600 font-bold my-2 mt-4 text-lg'>Senha</label>
          <input type="password" placeholder="Senha" id="password" className='w-full px-4 py-2 rounded-md' />
          <label htmlFor="password-confirmation" className='block text-teal-600 font-bold my-2 mt-4 text-lg'>Confirmação de Senha</label>
          <input type="password" placeholder="Confirme sua senha" id="password-confirmation" className='w-full px-4 py-2 rounded-md' />

          <button className='block w-full bg-teal-500 hover:bg-teal-600 rounded-md mt-8 text-white font-bold tracking-wider p-4 text-2xl'>Cadastrar</button>
          <fieldset class="border-t border-slate-400 text-center py-4 mt-8">
            <legend class="mx-auto px-4 text-slate-400 text-2xl italic">Já tem cadastro?</legend>
            <Link href="/" class="text-teal-500 text-lg hover:text-white">Faça seu login</Link>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default SignUp