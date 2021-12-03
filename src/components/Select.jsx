import React from 'react'
import styled from 'styled-components';

const SelectStyle = styled.select `
  width: 8rem;
  margin-left: .5rem;
  height: 1.2rem;
  background-color: #EE5544;
  color: #FFFFFF;
`

const Label = styled.label `
  color: #EE5544;
  margin-left: .5rem;
  display: inline-block;
  margin-top: 18px;
  font-weight: bold;
`

const Select = ({ text, options, name, set}) => {
  return (
    <div>
      <Label htmlFor={ name }>
        {text}
      </Label>
      <SelectStyle
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
      </SelectStyle>
    </div>
  )
}

export default Select
