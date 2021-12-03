import React from 'react'
import Input from './Input'
import { Context }  from '../context/MyContext'
import Select from './Select'

const Form = () => {
  const {name, setName, options, moeda, setMoeda, setData} =  React.useContext(Context)

  React.useEffect(() => {

    fetchApi(`https://economia.awesomeapi.com.br/last/USD-${moeda},EUR-${moeda},BTC-${moeda}`)
  }, [moeda])

  const fetchApi = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json)
  }

  return (
    <div>
      <form>
        <Input type='text' placeholder='qual seu nome?' value={name} set={setName}/>

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
