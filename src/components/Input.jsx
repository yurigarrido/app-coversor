import React from 'react'

const Input = ({type, value, placeholder, set}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => value >= 1 ? set(e.target.value) : set(1)}
      placeholder={placeholder}
    >
    </input>
  )
}

export default Input
