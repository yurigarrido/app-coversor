import React from 'react'
import { StyledInput } from '../styled/input'
import { StyledLabel } from '../styled/label'


const Input = ({type, value, placeholder, set, text}) => {
  return (
    <>
      <StyledLabel>{text}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        onChange={(e) =>  set(e.target.value)}
        placeholder={placeholder}
      >
      </StyledInput>
    </>
  )
}

export default Input
