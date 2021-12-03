import React from 'react'
import styled from 'styled-components';

const InputStyle = styled.input `
  width: 8rem;
  height: 2rem;
  margin: auto auto;
`

const Input = ({type, value, placeholder, set}) => {
  return (
    <InputStyle
      type={type}
      value={value}
      onChange={(e) => value >= 1 ? set(e.target.value) : set(1)}
      placeholder={placeholder}
    >
    </InputStyle>
  )
}

export default Input
