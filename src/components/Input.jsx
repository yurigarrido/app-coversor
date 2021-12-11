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
        onChange={(e) => value >= 1 ? set(e.target.value) : set(1)}
        placeholder={placeholder}
      >
      </StyledInput>
    </>
  )
}

export default Input
