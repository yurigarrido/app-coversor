import React from 'react'
import Box from '../components/box/Box';
import Form from '../components/Form'
import Image from '../components/Image';
import { Container } from '../styled/container';
import personalFinance from '../imagens/personalFinance.svg'

const Home = () => {
  return (
    <Container>
      <Image icon={ personalFinance }/>
      <div>
      <Form />
      <Box />
      </div>
    </Container>
  )
}

export default Home
