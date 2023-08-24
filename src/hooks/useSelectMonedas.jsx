import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
`

const useSelectMonedas = (label, options) => {
  
  const SelectMonedas = ()=> (
    <>
      <Label htmlFor="">{label}</Label>
      <select name="" id="">
        <option value="">Select</option>
        {options.map(option => (
            <option 
              key={option.id}
              value={option.id}
            >{option.name}</option>
        ))}
      </select>
    </>
  )

  return [ SelectMonedas ]
}

export default useSelectMonedas