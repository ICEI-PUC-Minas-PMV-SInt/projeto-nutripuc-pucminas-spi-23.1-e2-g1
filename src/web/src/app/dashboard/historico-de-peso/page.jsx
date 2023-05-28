"use client";
import { useState } from "react";

function historicoDePeso() {
    const [peso, setPeso] = useState(0);

    const [historico, setHistorico] = useState([]);

    function adicionarPeso() {
        setHistorico([
            ...historico,
            {
                peso,
                data: new Date(),
            },
        ]);
        setPeso(0);
    }

    return (
        <div className="my-10 w-full bg-teal-500 min-h-[450px] flex flex-col items-center p-12 gap-10 justify-center">
            <div className="flex flex-col wrap w-2/3>">
                <h1 className="mx-auto mb-4 bg-theme-blue p-4 rounded-lg font-bold text-2xl">
                    Controle de Peso
                </h1>
                <div>
                    <input
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        type="number"
                        placeholder="Digite seu peso atual"
                        className="bg-white px-2 py-1 text-black rounded-md"
                    />
                    <button
                        onClick={adicionarPeso}
                        className="bg-teal-600 px-2 py-1 text-white rounded-md"
                    >
                        Adicionar
                    </button>
                </div>
            </div>

            <div>
                <table className="table table-auto bg-white ">
                    <thead>
                        <th className="border border-spacing-y-2 text-center min-w-[150px] p-2">
                            PESO
                        </th>
                        <th className="border border-spacing-y-2 text-center min-w-[150px] p-2">
                            DATA
                        </th>
                    </thead>
                    <tbody>
                        {true &&
                            historico.map((registro) => (
                                <tr key={registro.data}>
                                    <td className="border border-spacing-y-2 text-center min-w-[150px] p-2">
                                        {registro.peso}
                                    </td>
                                    <td className="border border-spacing-y-2 text-center min-w-[150px] p-2">
                                        {registro.data.toLocaleDateString(
                                            "pt-BR",
                                            { week: "long" }
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default historicoDePeso;
