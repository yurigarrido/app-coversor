import React from 'react'
import Input from './Input'
import { Context }  from '../context/MyContext'
import Select from './Select'
import styled from 'styled-components';

const Forms = styled.form `
  border: 1px solid green;
  display: flex;
  width: 30rem;
  height: 5rem;
  border-radius: .4rem;
  padding: 1rem;
  color: #837d7d;
`

const Form = () => {
  const {valor, setValor, options, moeda, setMoeda, setData} =  React.useContext(Context)

  React.useEffect(() => {
    if( moeda === 'EUR') fetchApi(`https://economia.awesomeapi.com.br/last/USD-${moeda},BRL-${moeda}`);

    if(moeda === 'USD') fetchApi(`https://economia.awesomeapi.com.br/last/BRL-${moeda},EUR-${moeda}`)

    if(moeda === 'BRL') fetchApi(`https://economia.awesomeapi.com.br/last/USD-${moeda},EUR-${moeda}`)

  }, [moeda])

  const fetchApi = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    setData(Object.values(json));
  }

  return (
    <div>
      <Forms>
        <Input type='number' placeholder='digite um valor' value={valor} set={setValor}/>

        <Select
          text='Selecione uma moeda para ser usada como base: '
          name='moedaSelect'
          options={ options }
          set={setMoeda}
        />
      </Forms>
    </div>
  )
}

export default Form
