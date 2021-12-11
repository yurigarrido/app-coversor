import React from 'react'
import { Context } from '../../context/MyContext';

const Box = () => {
  const {data, valor, date} = React.useContext(Context)
  return (
    <div>
      <h5>data da Consulta: {date}</h5>
      <h3>12/5 </h3>
      { data && data.map((item, index) => {
        const valorMoeda= +item.ask;
        const multiplicador = valor;
        const convertido = (multiplicador /valorMoeda ).toFixed(2)
        const arrayTokens = item.name.split('/')
        const token = arrayTokens[0]
        return (
          <div key={ item.name }>
            <div>
              <h5>{token}</h5>
              <h3>{convertido}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Box
