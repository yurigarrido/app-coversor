import React from 'react'

const Footer = () => {
  const data = new Date();
  const ano = data.getUTCFullYear();
  return (
    <footer>
      {ano}-ConversorMoeda!
    </footer>
  )
}

export default Footer
