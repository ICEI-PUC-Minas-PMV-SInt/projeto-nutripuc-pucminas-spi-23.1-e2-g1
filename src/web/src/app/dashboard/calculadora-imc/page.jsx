"use client"
import Image from "next/image"
import { useState } from 'react'

function calculadoraIMC() {
  const [dadosPessoais, setDadosPessoais] = useState({
    sexo: 'Homem',
    idade: 0,
    altura: 0,
    peso: 0
  });
  const [resultado, setResultado] = useState('');

  function handleChange(e) {
    setDadosPessoais({
      ...dadosPessoais,
      [e.target.name]: e.target.value
    })
  };

  const calcularIMC = () => {
    const { peso, altura } = dadosPessoais;
    const imc = (peso / (altura * altura));

    // verficar imc
    if (imc >= 0 && imc < 18.5) {
      setResultado("Abaixo do Peso")
    } else if (imc > 18.5 && imc <= 25) {
      setResultado("Saudável")
    } else if (imc > 25) {
      setResultado('Obesidade')
    } else {
      setResultado('Ops, cálculo inválido')
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <h2 className='bg-theme-blue mx-auto p-4 rounded-lg font-bold'>Calculadora IMC</h2>
        <div className='flex flex-row space-between items-center'>
          <div className='mx-auto'>
            <form className='flex flex-col p-8'>
              <div className='mb-8'>
                <label htmlFor="sexo" className='block mb-8 font-bold'>Sexo</label>
                <select onChange={handleChange} value={dadosPessoais.sexo} name="sexo" id="sexo">
                  <option value="Homem">Homem</option>
                  <option value="Mulher">Mulher</option>
                </select>
              </div>
              <div className='mb-8'>
                <label htmlFor="idade" className='mb-8 font-bold'>Idade</label>
                <br />
                <input
                  id="idade"
                  onChange={handleChange}
                  value={dadosPessoais.idade}
                  name="idade"
                  type="number"
                /> (em anos)
              </div>
              <div className='mb-8'>
                <label htmlFor="altura" className='mb-8 font-bold'>Altura</label>
                <br />
                <input
                  id="altura"
                  name="altura"
                  type="number"
                  onChange={handleChange}
                  value={dadosPessoais.altura}
                  placeholder="exemplo: 1,80"
                /> (em metros)
              </div>
              <div className='mb-8'>
                <label htmlFor="peso" className='mb-8 font-bold'>Peso</label>
                <br />
                <input
                  type="number"
                  id="peso"
                  name="peso"
                  onChange={handleChange}
                  value={dadosPessoais.peso}
                  placeholder="exemplo: 80"
                /> kg
              </div>

              <div>
                <button
                  className='bg-theme-blue mx-auto p-4 rounded-lg font-bold'
                  type="button"
                  onClick={calcularIMC}
                >
                  Calcular
                </button>
              </div>
            </form>
          </div>
          <div className='mx-auto mt-8f flex flex-col items-center'>
            {(dadosPessoais.sexo === 'Homem') && <Image alt="homem" width={130} height={260} src="/homem.png" />}
            {(dadosPessoais.sexo === 'Mulher') && <Image alt="mulher" width={130} height={260} src="/mulher.png" />}
            <p className='mt-16 mx-auto font-bold text-2xl'>{resultado}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default calculadoraIMC