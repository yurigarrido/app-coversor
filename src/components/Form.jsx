import React from 'react'
import Input from './Input'
import { Context }  from '../context/MyContext'
import Select from './Select'

const Form = () => {
  const {valor, setValor, options, moeda, setMoeda, getToken, getHourAndDate} =  React.useContext(Context)

  React.useEffect(() => {
    getToken(moeda);
    getHourAndDate()
  }, [moeda])

  return (
    <div>
      <form>
        <p>Informe o valor e moeda para conversão</p>
        <Input
          text='valor'
          type='number'
          placeholder='digite um valor'
          value={valor}
          set={setValor}/>

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
