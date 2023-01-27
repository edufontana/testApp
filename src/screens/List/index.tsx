import { useRoute } from '@react-navigation/native'
import React from 'react'
import {Container, Text} from './styles'

interface resultProps {
  result:
  {
    eduardo: number
    fontana: number
  }
}

export function List(){

  const route = useRoute() 
  const {result} = route.params as resultProps

  return(
    <Container>
      <Text>Eduardo: {result.eduardo}</Text>
      <Text>Fontana: {result.fontana}</Text>
      
    </Container>
  )
}