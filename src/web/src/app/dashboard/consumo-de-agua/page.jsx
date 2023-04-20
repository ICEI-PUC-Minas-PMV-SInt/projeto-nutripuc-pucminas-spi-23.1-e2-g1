'use client'
import Image from "next/image"
import { useState } from "react"

function consumoDeAgua() {
  const registros = [{
    id: 0,
    consumo: 700,
    horario: new Date("2023-04-19T23:37:50.306Z").toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  },
  {
    id: 1,
    consumo: 200,
    horario: new Date("2023-04-19T20:37:50.306Z").toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }]

  const { meta, setMeta} = useState(0)

  return (
    <div className="flex">
      <div id="primeira-div" className="w-2/3">
        <div className="flex">
        <h2 className="bg-theme-blue mx-auto p-4 rounded-lg font-bold">Meta Dária de Consumo de Água</h2>
        </div>
        <div id="barra-de-consumo" className="flex flex-col mx-20 my-2">
          <div className="flex flex-row justify-between">
          <span className="inline-block">Consumo atual</span>
          <span className="inline-block text-3xl">{meta} ml<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</button></span>
          </div>
          <progress id="consumo-atual" value="32" max="100" className="w-full h-8 rounded-md"> 32% </progress>
        </div>

        <div id="dashboard-agua" className="flex p-16">
          <div id="historico-agua" className="w-2/3 bg-theme-blue p-8 rounded-md flex flex-grow h-full min-h-max gap-8">
            {
              registros.map(registro => {
                return (
                  <div key={registro.id} className="flex flex-col items-center justify-center gap-2">
                      { (registro.consumo >= 500) && <Image height={100} width={100} src="/garrafa-de-agua.png" />}
                      { (registro.consumo < 500) && <Image height={100} width={100} src="/copo-de-agua.png" />}
                    <div className="flex flex-col bg-white p-2 rounded-md font-bold justify-center items-center text-teal-600">
                      <span>{registro.consumo}</span>
                      <span>{registro.horario}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div id="registro-agua" className="w-1/3">
            <span id="botao-pre-definido">
              <button>200ml</button>
              <button>300ml</button>
              <button>500ml</button>
            </span>
            <span>
            <input type="number" step="100" />
            ml
            </span>
            <button>Adicionar Registro</button>
          </div>
        </div>
      </div>
      <div id="segunda-div" className="bg-black w-1/3 h-[100vh]">
        Segunda divisão
      </div>
    </div>
  )
}

export default consumoDeAgua