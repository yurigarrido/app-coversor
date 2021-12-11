import React from 'react'


const Select = ({ text, options, name, set}) => {
  return (
    <div>
      <label htmlFor={ name }>
        {text}
      </label>
      <select
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
      </select>
    </div>
  )
}

export default Select
