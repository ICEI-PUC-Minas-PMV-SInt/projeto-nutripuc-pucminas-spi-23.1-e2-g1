'use client'
import { useState } from "react";

function AtividadeFisica() {
  const [novaAtividade, setNovaAtividade] = useState({
    nome: '',
    data: '',
    horario: ''
  });

  const [atividades, setAtividades] = useState([
    {
      nome: 'Corrida',
      data: '11/03/2023',
      horario: '06:30'
    },
    {
      nome: 'Jogar futebol',
      data: '12/03/2023',
      horario: '16:00'
    },
    {
      nome: 'MMA',
      data: '13/03/2023',
      horario: '19:00'
    },
  ]);

  const editarAtividade = (event) => {
    setNovaAtividade({
      ...novaAtividade,
      [event.target.name]: event.target.value
    });
  }

  const corrigirData = (dataComTraco) => {
    const novaData = dataComTraco.split('-');
    return `${novaData[2]}/${novaData[1]}/${novaData[0]}`;
  };

  const adicionarAtividade = () => {
    setAtividades([
      ...atividades,
      {
        nome: novaAtividade.nome,
        data: corrigirData(novaAtividade.data),
        horario: novaAtividade.horario
      }
    ])

    setNovaAtividade({
      nome: '',
      data: '',
      horario: ''
    });
  }

  return (
    <div className="flex my-10">
      <div className="col-esquerda flex flex-col wrap w-2/3">
        <h1 className="mx-auto mb-4 bg-theme-blue p-4 rounded-lg font-bold">Registro de Atividades Físicas</h1>
        <div className="mx-auto">
          <table className="table table-auto bg-white ">
            <thead>
              <tr>
                <th className="border border-spacing-y-2 text-center min-w-[150px] p-2">Atividade</th>
                <th className="border border-spacing-y-2 text-center min-w-[150px] p-2">Data</th>
                <th className="border border-spacing-y-2 text-center min-w-[150px] p-2">Horário</th>
                <th className="border border-spacing-y-2 text-center min-w-[150px] p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {atividades.map(atividade =>
                <tr key={atividade.nome + Math.random()}>
                  <td className="border text-center min-w-[150px] p-2">{atividade.nome}</td>
                  <td className="border text-center min-w-[150px] p-2">{atividade.data}</td>
                  <td className="border text-center min-w-[150px] p-2">{atividade.horario}</td>
                  <td className="border text-center min-w-[150px] p-2">
                    <select className="w-full select:bg-teal-500" name="status">
                      <option value="Concluído">Concluído</option>
                      <option value="Pendente">Pendente</option>
                    </select>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-esquerda flex flex-col wrap w-1/3 max-w-[400px]">
        <h2 className="mb-4 mx-auto bg-theme-blue p-4 rounded-lg font-bold">Nova Atividade Física</h2>
        <div>
          <form>
            <input type="text" value={novaAtividade.nome} onChange={editarAtividade} name="nome" id="atividade-nome" placeholder="Ex: Corrida" className="px-4 py-2 mb-4 w-full" />
            <input type="date" value={novaAtividade.data} onChange={editarAtividade} name="data" id="atividade-nome" placeholder="Escolha uma Data" className="px-4 py-2 mb-4 w-full bg-white" />
            <input type="time" value={novaAtividade.horario} onChange={editarAtividade} name="horario" id="atividade-nome" placeholder="Escolha um Horário" className="px-4 py-2 mb-4 w-full" />
            <button onClick={adicionarAtividade} type="button" className="mx-auto bg-theme-blue w-[250px] p-2 rounded-md hover:bg-teal-500 active:translate-y-0.5">Adicionar Atividade Física</button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default AtividadeFisica