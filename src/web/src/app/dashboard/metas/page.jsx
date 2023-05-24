'use client'
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Metas() {

  const FORMAT_DATE = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }

  const [metas, setMetas] = useState([
    {
      objetivo: 'Objetivo específico',
      relevancia: 'motivo',
      prazo: new Date().toLocaleDateString('pt-BR', FORMAT_DATE),
    },
  ]);

  const [objMeta, setObjMeta] = useState({
    objetivo: 'Objetivo específico',
    relevancia: 'motivo',
    prazo: new Date().toLocaleDateString('pt-BR', FORMAT_DATE),
  });

  function handleChange(e) {
    console.log(e.target.name);
    if (e.target.name === 'prazo') {
      setObjMeta({
        ...objMeta,
        prazo: new Date(e.target.value).toLocaleDateString('pt-BR', FORMAT_DATE),
      })
      console.log(e.target.value)
    } else {
      setObjMeta({
        ...objMeta,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target[1].checked === false) {
      toast.error('Sua meta deve ser específica!')
      return
    }
    if (e.target[2].checked === false) {
      toast.error('Sua meta deve ser mensurável!')
      return
    }

    if (e.target[0].value === "") return
    if (e.target[3].value === "") return
    if (e.target[4].value === "") return


    setMetas(previousValue => {
      return [
        ...previousValue,
        objMeta,
      ]
    });

    e.target[0].value = ""
    e.target[3].value = ""
    e.target[4].value = ""
  }

  return (
    <div className="flex w-full h-screen" >
      <div className="w-2/3">
        <div className="p-4 bg-white flex flex-col justify-start items-center min-h-[300px]">
            <h1>Metas SMART</h1>
            <Toaster />
          <table className="table-auto">
            <thead>
              <tr>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Objetivo Específico</th>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Relevância</th>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Prazo</th>
              </tr>
            </thead>
            <tbody>
              {
                metas.map((registro) =>
                  <tr key={registro.objetivo+new Date()}>
                    <td className="border text-center min-w-[150px] p-2">{registro.objetivo}</td>
                    <td className="border text-center min-w-[150px] p-2">{registro.relevancia}</td>
                    <td className="border text-center min-w-[150px] p-2">{registro.prazo}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/3" >
        <form className="flex flex-col gap-4 px-8 items-start" onSubmit={handleSubmit} >
        <label for="objetivo" className="w-full bg-blue-400 text-center text-white p-2 rounded-md font-bold text-3xl">Nova meta</label>
          <input onChange={handleChange} className="px-4 py-2 w-full" type="text" name="objetivo" id="objetivo" placeholder="Defina sua meta..."/>
          <span className="text-xl">
          <input type="checkbox" class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="especifico" id="especifico" />Seu objetivo é único e especifico?
          </span>
          <span className="text-xl">
          <input type="checkbox" class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="mensuravel" id="mensuravel" />Seu objetivo é mensurável (Há como medir o progresso)?
          </span>
          <label for="relevancia">Motivo! Escolha um motivo relevante para concluir sua meta.</label>
          <input onChange={handleChange} className="px-4 py-2 w-full" type="text" name="relevancia" id="relevancia" placeholder="Defina em poucas palavras!" />
          <label for="prazo">Escolha uma data limite!</label>
          <input onChange={handleChange} className="px-4 py-2 w-full" type="date" name="prazo" id="prazo" />
          <button type="submit" className="bg-theme-blue w-[250px] p-2 rounded-md hover:bg-teal-300 active:translate-y-0.5" >Adicionar nova meta</button>
        </form>
      </div>
    </div>
  )
}

export default Metas