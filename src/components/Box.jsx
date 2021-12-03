import React from 'react'
import { Context } from '../context/MyContext';
import styled from 'styled-components'

const Div = styled.div `
  background-color: #FFBB55;
  display: flex;
  width: 30rem;
  height: 10rem;
  align-items: center;
  justify-content: center;
  color: #202124;
  padding: 1rem;
  border-radius: .4rem;
`

const Box = () => {
  const {data, valor} = React.useContext(Context)
  return (
    <div>
      { data && data.map((item, index) => {
        const arrayTokens = item.name.split('/')
        const token = arrayTokens[0]
        const tokenCurrenci = arrayTokens[1]
        return (
          <p key={index}> O {token} está cotado em {(+item.ask).toFixed(2)} {tokenCurrenci}</p>
        )
      })}
      { data && data.map((item, index) => {
        const valorMoeda= +item.ask;
        const multiplicador = valor;
        const convertido = (valorMoeda * multiplicador).toFixed(2)
        const arrayTokens = item.name.split('/')
        const token = arrayTokens[0]
        const tokenCurrenci = arrayTokens[1]
        return (
          <Div key={ index }>
            <div>
               {valor} {token} igual a
               <h3>{convertido} {tokenCurrenci}</h3>
            </div>
          </Div>
        )
      })}
    </div>
  )
}

export default Box
