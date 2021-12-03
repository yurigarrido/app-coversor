import React from 'react';

export const Context = React.createContext();

const MyContext = ({children}) => {
  const [valor, setValor] = React.useState(1);
  const [moeda, setMoeda] = React.useState('EUR');
  const [data, setData] = React.useState(false);

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
  }

  return (
      <Context.Provider value={ value } >
        {children}
      </Context.Provider>
  )
}

export default MyContext;