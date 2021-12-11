import React from 'react'
import { StyledFooter } from '../styled/footer';

const Footer = () => {
  const data = new Date();
  const ano = data.getUTCFullYear();
  return (
    <StyledFooter>
      {ano}-ConversorMoeda!
    </StyledFooter>
  )
}

export default Footer
