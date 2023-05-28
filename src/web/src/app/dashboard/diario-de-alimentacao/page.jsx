'use client'
import { useState } from "react";

function diarioDeAlimentacao() {
  const FORMAT_DATE = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }

  const [diarioAlimentar, setDiarioAlimentar] = useState([
    {
      data: new Date().toLocaleDateString('pt-BR', FORMAT_DATE),
      tipoDeRefeicao: 'jantar',
      horario: '20:28',
      descricao: 'pizza',
    },
  ]);

  const [objRefeicao, setObjRefeicao] = useState({
    data: new Date().toLocaleDateString('pt-BR', FORMAT_DATE),
    tipoDeRefeicao: 'desjejum',
    horario: '',
    descricao: '',
  });

  function handleChange(e) {
    console.log(e.target.name);
    if (e.target.name === 'data') {
      setObjRefeicao({
        ...objRefeicao,
        data: new Date(e.target.value).toLocaleDateString('pt-BR', FORMAT_DATE),
      })
    } else {
      setObjRefeicao({
        ...objRefeicao,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = () => {
    console.log(objRefeicao.data, diarioAlimentar);
    setDiarioAlimentar(previousValue => {
      return [
        ...previousValue,
        objRefeicao,
      ]
    });
  }

  return (
    <div className="flex w-full h-screen" >
      <div className="w-2/3">
        <div className="p-4 my-10 bg-white flex justify-center items-start min-h-[300px]">
          <table className="table-auto">
            <thead>
              <tr>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Dia</th>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Horário</th>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Tipo de Refeição</th>
                <th scope="col" className="border border-spacing-y-2 text-center min-w-[150px] p-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {
                diarioAlimentar.map((registro) =>
                  <tr key={registro.data + registro.horario}>
                    <td className="border text-center min-w-[150px] p-2">{registro.data}</td>
                    <td className="border text-center min-w-[150px] p-2">{registro.horario}</td>
                    <td className="border text-center min-w-[150px] p-2">{registro.tipoDeRefeicao}</td>
                    <td className="border text-center min-w-[150px] p-2">{registro.descricao}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/3" >
        <div className="flex flex-col gap-4 px-8 items-center">
          <select onChange={handleChange} className="px-4 py-2 w-full" name="tipoDeRefeicao" id="tipoDeRefeicao">
            <option value="desjejum">Desjejum</option>
            <option value="cafedaManha">Café da manhã</option>
            <option value="lancheDaManha">Lanche da manhã</option>
            <option value="almoco">Almoço</option>
            <option value="lancheDaTarde">Lanche da tarde</option>
            <option value="jantar">Jantar</option>
            <option value="Ceia">Ceia</option>
          </select>
          <input onChange={handleChange} className="px-4 py-2 w-full" type="date" name="data" id="" />
          <input onChange={handleChange} className="px-4 py-2 w-full" type="time" name="horario" id="" />
          <textarea onChange={handleChange} className="px-4 py-2 w-full" rows="5" cols="5" name="descricao" />
          <button onClick={handleSubmit} className="bg-theme-blue w-[250px] p-2 rounded-md hover:bg-teal-300 active:translate-y-0.5" >Adicionar Refeição</button>
        </div>
      </div>
    </div>
  )
}

export default diarioDeAlimentacao