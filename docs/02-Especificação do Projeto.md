# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

![image](https://user-images.githubusercontent.com/67482340/222283368-5a256804-eb45-4907-95e4-31c4542be101.png)

![image](https://user-images.githubusercontent.com/67482340/222283385-60b41601-ec0e-45da-b164-dde6942971b1.png)


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                                |PARA ... `MOTIVO/VALOR`                                                                        |
|--------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Anderson Lima      | Calcular o seu IMC                                                                | Descobrir qual o seu peso ideal e se manter nele                                              |
| Anderson Lima      | Manter um histórico do seu peso                                                   | Acompanhar seu progresso em relação a alimentação e prática de exercícios                     |
| Anderson Lima      | Manter as refeições de 4 a 5 por dia, com intervalo de 3 em 3 horas               | Fazer todas as refeições e não se esquecer de comer enquanto trabalha                         |
| Anderson Lima      | Registrar diariamente a prática da atividade físicas                              | Se sentir motivado ao ver sua regularidade e evolução                                         |
| Anderson Lima      | Quer ter um registro da quantidade de água ingerida                               | Para ter uma noção do consumo diário e manter a quantidade ideal                              |
| Anderson Lima      | Estabelecer metas                                                                 | Acompanhar suas conquistas e se sentir estimulado a continuar                                 |
| Ivan Piselli       | Calcular o seu IMC                                                                | Manter seu peso ideal e deixar seu corpo mais definido ganhando massa magra                   |
| Ivan Piselli       | Manter um registro de atividade física, focado no desempenho                      | Alcançar seu objetivo o de hipertrofia                                                        |
| Ivan Piselli       | Quer ter uma rotina de alimentação mais saudável                                  | Para se alimentar adequadamente antes e depois dos treinos                                    |
| Ivan Piselli       | Acompanhar sua ingestão de água                                                   | O baixo consumo pode interferir no seu desempenho geral na musculação                         |
| Ivan Piselli       | Definir suas metas de alimentação, ingestão de água e prática de atividade física | Potenciaizar seus resultados                                                                  |


## Requisitos

Os requisitos funcionais descrevem as possibilidades e necessidades de interação de ambos os usuários com o sistema, enquanto os requisitos não funcionais descrevem os aspectos que o sistema deverá apresentar de maneira geral, como especificações de hardware, obrigações com stakeholders ou métricas de qualidades. Já as restrições se tratam de limitações que podem ser de qualquer cunho (orçamentário, tempo, legais etc).  
   
Estes conjuntos de requisitos são apresentados a seguir:  

### Requisitos Funcionais

|ID                  |            Descrição do Requisito                                                                                                                                          | Prioridade     |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| RF-01              | O sistema deve seguir os padrões de identidade visual elaborado pelos designers                                                                                            | BAIXA          |
| RF-02              | O projeto deverá possuir um sistema de cadastro e login de usuários                                                                                                        | ALTA           |
| RF-03              | Deverá existir uma homepage no endereço raiz com o descritivo das funcionalidades presentes no sistema e o formulário de login com link para o formulário de cadastro      | ALTA           |
| RF-04              | O usuário deve poder fazer seu cadastro no formulário de signup no endereço ("/signup")                                                                                    | ALTA           |
| RF-05              | Ao fazer login o usuário deve ser encaminhado para seu dashboard que constará as funcionalidades oferecida pelo sistema                                                    | ALTA           |
| RF-06              | O sistema deve possuir a funcionalidade de calcular o IMC do usuário                                                                                                       | ALTA           |
| RF-07              | O sistema deve possuir a funcionalidade de registrar o peso atual usuário                                                                                                  | ALTA           |
| RF-08              | O sistema deve possuir a funcionalidade de mostrar o histórico de peso do usuário                                                                                          | MÉDIA          |
| RF-09              | O histórico de peso do usuário deve ser exibido de forma visual em gráfico de linhas                                                                                       | BAIXA          |
| RF-10              | O sistema deve possuir a funcionalidade de registrar o consumo de água do paciente ao longo do dia                                                                         | MÉDIA          |
| RF-11              | O sistema deve possuir a funcionalidade de “diário de alimentação” que consiste de um histórico de anotações arquivadas por dia                                            | MÉDIA          |
| RF-12              | O sistema deve possuir a funcionalidade de “registro de atividade física” que consiste de escolher uma categoria de exercício predefinida, selecionar o nível de intensidade numa escala de 0-5 estrelas e um breve descritivo opcional.                                                                                                                                                                     | MÉDIA          |
| RF-13              | O sistema deve possuir a funcionalidade de Metas aonde o usuário será incentivado a criar metas baseadas no padrão SMART (Specific, Measurable, Attainable, Relevant, Time-bound). | MÉDIA          |


### Requisitos não Funcionais

|ID        | Descrição do Requisito                                                                                                                                                                         | Prioridade |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RNF-01   | O aplicativo deverá ser responsivo e se adaptar entre mobile (até 512 pixels) e web (acima de 512 pixels)                                                                                      | ALTA       |
| RNF-02   | A sincronização de dados entre os usuários deve ser de, no máximo, 60 segundos.                                                                                                                | MÉDIA      |
| RNF-03   | O sistema deve possuir uma interface de fácil compreensão, intuitiva, não necessitando um treinamento ou manual para sua utilização, de forma a atingir um Customer Effort Score entre 0 e 4.  | BAIXA      |
| RNF-04   | O sistema deverá possuir um NPS (Net Promoter Score) entre 75 e 100, considerado excelente, até alcançar seu milésimo cliente.                                                                 | BAIXA      |
| RNF-05   | O usuário não deve navegar mais de três vezes para acessar todas as funcionalidade que o sistema oferece.                                                                                      | MÉDIA      |
| RNF-06   | O sistema deve respeitar as demandas da LGPD.                                                                                                                                                  | MÉDIA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                               |
|--|---------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 04/06/2023  |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end                              |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho                                            |
