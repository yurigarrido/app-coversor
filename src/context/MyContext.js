import React from 'react';

export const Context = React.createContext();

const MyContext = ({children}) => {
  const [valor, setValor] = React.useState('');
  const [moeda, setMoeda] = React.useState('EUR');
  const [data, setData] = React.useState(false);
  const [date, setDate] = React.useState('')

  const getHourAndDate = () => {
    const data = new Date();
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getUTCFullYear();
    const hora = data.getHours();
    let minutos = data.getMinutes();
    let minu = ''
    if( minutos < 10 ) {
      minu = '0' + minutos
    } else {
      minu = minutos
    }
    
    const dataRequisição = ` ${dia}/${mes + 1}/${ano}  ${hora}:${minu}`;
    setDate(dataRequisição)
  }

  const getToken = (token) => {
    const fetchApi = async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      setData(Object.values(json));
    }
    if( token === 'EUR') fetchApi(`https://economia.awesomeapi.com.br/last/USD-${token},BRL-${token}`);
    if(token === 'USD') fetchApi(`https://economia.awesomeapi.com.br/last/BRL-${token},EUR-${token}`)
    if(token === 'BRL') fetchApi(`https://economia.awesomeapi.com.br/last/USD-${token},EUR-${token}`)
  }

  const options = [
    {
      name: 'Euro',
      value: 'EUR',
    },
    {
      name: 'Dolár',
      value: 'USD',
    },
    {
      name: 'Real',
      value: 'BRL',
    }
  ];

  const value = {
    valor,
    setValor,
    options,
    moeda,
    setMoeda,
    data,
    setData,
    date,
    getHourAndDate,
    getToken
  }

  return (
      <Context.Provider value={ value } >
        {children}
      </Context.Provider>
  )
}

export default MyContext;