"use client"
import Image from "next/image"
import react, {useState} from 'react'

function calculadoraIMC() {
  const [imc,setImc] = useState()
  const [info,setInfo] = useState()
  const [peso,setPeso] = useState()
  const [altura,setAltura] = useState()

  const CalculaImc = () => {
    let val = (
      [peso / (altura) * Number(altura)].toFixed(1)
    )
    setImc(val)
    // verficar imc
    if(val < 18.5) {
      setInfo("Abaixo do Peso")
    } else if (val > 18.5 && val <= 25) {
      setInfo("Saudável")
    } else {
      setInfo('Obesidade')
    }
  }



  return (
    <div>
      <div className="flex flex-col">
        <h2 className='bg-theme-blue mx-auto p-4 rounded-lg font-bold'>Calculadora IMC</h2> 

        <div className='grid grid-cols-2'>

          <div className='mx-auto'>        
          <form className='flex flex-col p-8'>
            <div className='mb-8'>
              <label className='block mb-8 font-bold'>Sexo</label>
              <select name="select" id="">
                <option value="Homem">Homem</option>
                <option value="Mulher">Mulher</option>
              </select>
              {/* <input className='cursor-pointer mr-4 p-4 rounded-lg  border-solid border-2' type="button" value="Homem" />
              <input className='cursor-pointer p-4 rounded-lg  border-solid border-2' type="button" value="Mulher" /> */}
            </div>
            <div className='mb-8'>
              <label className='mb-8 font-bold'>Idade</label>
              <br/>
              <input type="number" /> (em anos)
            </div>


            <div className='mb-8'>
              <label className='mb-8 font-bold'>Altura</label>
              <br/>
              <input 
                type="number" 
                onChange={(e) => setAltura(e.target.value)}
                placeholder="exemplo: 180"
              /> (em cm)
            </div>
            <div className='mb-8'>
              <label className='mb-8 font-bold'>Peso</label>
              <br/>
              <input 
              type="number" 
              onChange={(e) => setPeso(e.target.value)}
              placeholder="exemplo: 80"
              /> kg
            </div>

            <div>
            <button 
              className='bg-theme-blue mx-auto p-4 rounded-lg font-bold' 
              type="submit"
              onClick={CalculaImc}
            >  
                Calcular
            </button>
            </div>  
          </form>
          </div>
          <div className='mx-auto mt-8'>            
              IMAGEM AQUI
            <div>
              <p className='mt-16'> 
                <p>{imc}</p>
              </p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default calculadoraIMC