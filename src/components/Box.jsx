import React from 'react'
import { Context } from '../context/MyContext';

const Box = () => {
  const {data, valor} = React.useContext(Context)
  return (
    <div>
      { data && data.map((item, index) => {
        const arrayTokens = item.name.split('/')
        const token = arrayTokens[0]
        const tokenCurrenci = arrayTokens[1]
        return (
          <p key={index}> O {token} está cotado em {+item.ask} {tokenCurrenci}</p>
        )
      })}
      { data && data.map((item, index) => {
        const valorMoeda= +item.ask;
        const multiplicador = valor;
        const convertido = (valorMoeda * multiplicador)
        const arrayTokens = item.name.split('/')
        const token = arrayTokens[0]
        const tokenCurrenci = arrayTokens[1]
        return (
          <div key={ index }>
            <p> {valor} {token} = {convertido} {tokenCurrenci}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Box
