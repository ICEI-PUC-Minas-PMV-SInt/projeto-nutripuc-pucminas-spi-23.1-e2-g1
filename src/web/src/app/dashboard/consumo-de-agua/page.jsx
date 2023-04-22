'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

function consumoDeAgua() {

  const [registros, setRegistros] = useState(
    [{
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
  )

  const [meta, setMeta] = useState(2000)
  const [consumoDiario, setConsumoDiario] = useState(0)
  const [aguaConsumida, setAguaConsumida] = useState(0)

  useEffect(() => {
    const consumoAtual = registros.reduce((acumulador, registroAtual) => {
      return acumulador + registroAtual.consumo
    }, 0)
    setConsumoDiario(consumoAtual)
  }, [registros])

  function digitarNumero(e) {
    setMeta(e.target.value)
  }

  function adicionarRegistro() {
    setRegistros(valorAnterior => {
      return [
        ...valorAnterior,
        {
          id: Math.random() * 100,
          consumo: parseInt(aguaConsumida),
          horario: new Date().toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      ]
    })
    setAguaConsumida(0)
  }

  return (
    <div className="flex">
      <div id="primeira-div" className="w-2/3">
        <div className="flex">
          <h2 className="bg-theme-blue mx-auto p-4 rounded-lg font-bold">Meta Dária de Consumo de Água</h2>
        </div>
        <div id="barra-de-consumo" className="flex flex-col mx-20 my-2">
          <div className="flex flex-row justify-between">
            <span className="inline-block">Consumo atual: {consumoDiario}</span>
            <span className="inline-block text-3xl">Meta: <input value={meta} className="w-[100px]" type="number" onChange={digitarNumero} />ml
            </span>
          </div>
          <progress id="consumo-atual" value={consumoDiario} max={meta} className="w-full [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-400 [&::-moz-progress-bar]:bg-blue-400" />
        </div>

        <div id="dashboard-agua" className="flex p-16">
          <div id="historico-agua" className="w-2/3 bg-theme-blue p-8 rounded-md flex flex-grow h-full min-h-max gap-8">
            {
              registros.map(registro => {
                return (
                  <div key={registro.id} className="flex flex-col items-center justify-center gap-2">
                    {(registro.consumo >= 500) && <Image height={100} width={100} src="/garrafa-de-agua.png" />}
                    {(registro.consumo < 500) && <Image height={100} width={100} src="/copo-de-agua.png" />}
                    <div className="flex flex-col bg-white p-2 rounded-md font-bold justify-center items-center text-teal-600">
                      <span>{registro.consumo}</span>
                      <span>{registro.horario}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div id="registro-agua" className="w-1/3 p-10 flex flex-col items-center">
            {/* <span id="botao-pre-definido" className="flex justify-between">
              <input className="ml-2" type="radio" id="200ml" value="200" />
              <label htmlFor="200ml">200ml
              </label>
              <input className="ml-2" type="radio" id="300ml" value="300" />
              <label htmlFor="300ml">300ml
              </label>
              <input className="ml-2" type="radio" id="500ml" value="500" />
              <label htmlFor="500ml">500ml
              </label>
            </span> */}
            <span>
              <input className="w-[130px] my-6" type="number" step="100" value={aguaConsumida} onChange={(e) => setAguaConsumida(e.target.value)} /> ml
            </span>
            <button onClick={adicionarRegistro} className="rounded-md p-4 bg-blue-600 text-white">Adicionar Registro</button>
          </div>
        </div>
      </div>
      <div id="segunda-div" className="bg-white w-1/3 mr-10 py-10 flex flex-col items-center">
        <h2 className="font-bold text-lg">Parabéns, hoje você bebeu</h2>
        <span className="font-bold text-4xl">{(consumoDiario / meta) * 100}%</span>
        <p>da sua meta diária!</p>
        <Image className="mt-4" height={400} width={200} src="/copo-maior.jpg" />

      </div>
    </div >
  )
}

export default consumoDeAgua