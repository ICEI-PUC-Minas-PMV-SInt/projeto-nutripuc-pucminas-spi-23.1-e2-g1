'use client'
import { z } from "zod"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState } from "react"
import { Toaster, toast } from "react-hot-toast"

function SignUp() {
  const router = useRouter()

  const emailInput = useRef()
  const passwordInput = useRef()
  const passwordConfirmationInput = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [emailError, setEmailError] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('')
  const [termsError, setTermsError] = useState('')

  const registerFormSchema = z.object({
    email: z.string().email('Endereço de e-mail inválido').min(1, "Email obrigatório"),
    password: z.string().min(1, "Senha obrigatória").min(8, "Senha deve possuir pelo menos 8 caractéres"),
    "password-confirmation": z.string().min(1, "Você deve confirmar sua senha"),
    terms: z.literal("on", {
      errorMap: () => ({ message: "Você aceitou nossos termos e condições?"})
    })
  }).refine((data) => data.password === data["password-confirmation"], {
    path: ["password-confirmation"],
    message: "A confirmação de senham não bate"
  })

  async function handleSubmit(event) {
    event.preventDefault()

    setEmailError('')
    setpasswordError('')
    setPasswordConfirmationError('')
    setTermsError('')

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    
    const validatedForm = await registerFormSchema.safeParse(data)
    console.log("Validação do Formulário: ", validatedForm.success)
    console.log(!validatedForm.success)
    if (validatedForm.succes == false) {
      console.log("Entrei no erro")
      const submitErrors = validatedForm.error?.issues.map(issue => {
        return {
          message: issue.message,
          path: issue.path[0]
        }
      })

      await submitErrors?.forEach(error => {
        if (error.path === 'email') {
          setEmailError(error.message)
        } else if (error.path === 'password') {
          setpasswordError(error.message)
        } else if (error.path === 'password-confirmation') {
          setPasswordConfirmationError(error.message)
        } else if (error.path === 'terms') {
          setTermsError(error.message)
        }
      })

      console.log(emailError)
      console.log(passwordError)
      console.log(passwordConfirmationError)
      console.log(termsError)

      return
  }

    console.log("funcionou sem erro")
    if (validatedForm.success == true) {
      console.log("Posting...")
      const response = await fetch("/api/sign-up", {
        cache: 'no-store',
        method: "POST",
        body: JSON.stringify(validatedForm.data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "application/json"
        }
      })
      const newUser = await response.json()
      localStorage.setItem("nutripuc[user]", newUser.email)
      localStorage.setItem(`nutripuc[password]`, newUser.password)
      console.log("New user created!")
      toast.success("Novo usuário criado com sucesso!")
      
      await router.push('/')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='w-[600px] justify-self-center'>
        <form method="POST" onSubmit={handleSubmit} className='bg-teal-500/25 shadow-2xl p-10 border-2 border-teal-500/10 rounded-xl'>
          <h3 className='font-bold text-teal-600 text-5xl text-center p-2 m-4 mb-8'>Faça seu cadastro</h3>

          <label htmlFor="email"  className='block text-teal-600 font-bold my-2 text-lg'>Email</label>
          <input ref={emailInput} value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="Seu melhor e-mail" id="email" className='w-full px-4 py-2 rounded-md' />
          {emailError ? <span className="text-red-600 font-bold mt-2">{emailError}*</span> : <span className="invisible mt-2" aria-hidden >Error placeholder</span> }

          <label htmlFor="password" className='block text-teal-600 font-bold my-2 mt-4 text-lg'>Senha</label>
          <input type="password" ref={passwordInput} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='new-password'  name="password" placeholder="Senha" id="password" className='w-full px-4 py-2 rounded-md' />
          {passwordError ? <span className="text-red-600 font-bold mt-2">{passwordError}*</span> : <span className="invisible mt-2" aria-hidden >Error placeholder</span> }
          <label htmlFor="password-confirmation" className='block text-teal-600 font-bold my-2 mt-4 text-lg'>Confirmação de Senha</label>
          <input type="password" ref={passwordConfirmationInput} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} name="password-confirmation" placeholder="Confirme sua senha" id="password-confirmation" className='w-full px-4 py-2 rounded-md' />
          {passwordConfirmationError ? <span className="text-red-600 font-bold mt-2">{passwordConfirmationError}*</span> : <span className="invisible mt-2" aria-hidden >Error placeholder</span> }
          { }
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input
                id="terms"
                // ref={termsCheckbox}
                // value={terms}
                // onChange={setTerms(!terms)}
                aria-describedby="terms"
                type="checkbox"
                name="terms"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                Eu aceito os{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Termos e Condições
                </a>
              </label>
            </div>

          </div>
          {termsError ? <span className="text-red-600 font-bold mt-2">{termsError}</span> : <span className="invisible mt-2" aria-hidden >Error placeholder</span> }

          <button type="submit" className='block w-full bg-teal-500 hover:bg-teal-600 rounded-md mt-8 text-white font-bold tracking-wider p-4 text-2xl'>Cadastrar</button>
          <Toaster toastOptions={{
            success: {
              style: {
                padding: '2rem',
                background: "rgba(54, 223, 105, 0.76)",
                borderRadius: "3rem",
                fontSize: '1.4rem'
              },
              icon: '✔️',
              iconTheme: {
                primary: '#08f372'
              }
            }
          }} />
          <fieldset className="border-t border-slate-400 text-center py-4 mt-8">
            <legend className="mx-auto px-4 text-slate-400 text-2xl italic">Já tem cadastro?</legend>
            <Link href="/" className="text-teal-500 text-lg hover:text-white">Faça seu login</Link>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default SignUp