import React from 'react'
import Input from './Input'
import { Context }  from '../context/MyContext'
import Select from './Select'
import { StyledForm } from '../styled/form'

const Form = () => {
  const {valor, setValor, options, moeda, setMoeda, getToken, getHourAndDate} =  React.useContext(Context)

  React.useEffect(() => {
    getToken(moeda);
    getHourAndDate()
  }, [moeda])

  return (
    <div>
      <StyledForm>
        <h1>ConversorMoeda!</h1>
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
      </StyledForm>
    </div>
  )
}

export default Form
