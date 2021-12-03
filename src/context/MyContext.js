import React from 'react';

export const Context = React.createContext();

const MyContext = ({children}) => {
  const [name, setName] = React.useState('');
  const [moeda, setMoeda] = React.useState('EUR');
  const [data, setData] = React.useState(null);

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
    name, 
    setName,
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