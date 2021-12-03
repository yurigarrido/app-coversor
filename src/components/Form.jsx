import React from 'react'
import Input from './Input'
import { Context }  from '../context/MyContext'
import Select from './Select'

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
      <form>
        <Input type='number' placeholder='digite um valor' value={valor} set={setValor}/>

        <Select
          text='Selecione uma moeda para ser usada como base: '
          name='moedaSelect'
          options={ options }
          set={setMoeda}
        />
      </form>
    </div>
  )
}

export default Form
