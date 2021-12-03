import React from 'react'
import Box from '../components/Box';
import Form from '../components/Form'
import Image from '../components/Image';
import styled from 'styled-components';

const ContainerFlex = styled.div `
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Home = () => {
  return (
    <ContainerFlex>
      <Image />
      <Box />
      <Form />
    </ContainerFlex>
  )
}

export default Home
