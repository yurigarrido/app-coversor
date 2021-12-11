import React from 'react'
import { Context } from '../../context/MyContext';
import { StyledData } from '../../styled/ data';

const Box = () => {
  const {data, valor, date} = React.useContext(Context)
  return (
    <StyledData>
      { data && data.map((item, index) => {
        const valorMoeda= +item.ask;
        const multiplicador = valor;
        const convertido = (multiplicador /valorMoeda ).toFixed(2)
        const arrayTokens = item.name.split('/')
        const token = arrayTokens[0]
        return (
          <div key={ item.name }>
            <div>
              <h3>{token}</h3>
              <h4>{convertido}</h4>
            </div>
          </div>
        )
      })}
      <h3>Data da Consulta: </h3>
      <h4>{date}</h4>
    </StyledData>
  )
}

export default Box
