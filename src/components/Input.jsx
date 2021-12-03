import React from 'react'

const Input = ({type, select, value, placeholder, set, children}) => {
  console.log(value);
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => set(e.target.value)}
      placeholder={placeholder}
    >
    </input>
  )
}

export default Input
