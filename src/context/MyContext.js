import React, { useState } from 'react';

export const Context = React.createContext();

const MyContext = ({children}) => {
  

  return (
      <Context.Provider value={ '' } >
        {children}
      </Context.Provider>
  )
}

export default MyContext;