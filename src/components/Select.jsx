import React from 'react'
import { StyledLabel } from '../styled/label'
import { StyledSelect } from '../styled/select'


const Select = ({ text, options, name, set}) => {
  return (
    <div>
      <StyledLabel htmlFor={ name }>
        {text}
      </StyledLabel>
      <StyledSelect
        name={ name }
        onChange={ ({target}) => set(target.value)}
      >
        {options.map((option, index) => 
          <option
          key={ index }
          value={option.value}
          >{option.name}
          </option>
        )}
      </StyledSelect>
    </div>
  )
}

export default Select
