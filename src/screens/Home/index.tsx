import React, { useState } from 'react'
import {Container, Text, Button,TextInput, ArrayText } from './styles'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'



export function Home(){
  const [names, setNames] = useState<string[]>([])
  const [name, setName] = useState('')

  const result = names.reduce((acc,names) =>{
    if(names === 'eduardo'){
      acc.eduardo = acc.eduardo + 1;
    }

    if(names === 'fontana') {
      acc.fontana = acc.fontana + 1;
    }
    if(names === 'eduardo fontana') {
      acc.eduardo = acc.eduardo + 1;
      acc.fontana = acc.fontana + 1;
    }

    return acc;
  },
    {eduardo: 0, fontana:0}
  )

  const navigation = useNavigation()

  function handleNewName(name: string){

  /*   alert(name) */

    setNames([...names, name.toLowerCase()])


  }

  function NextScreen(){
    navigation.navigate('List',{result})
  }

  return(

    <Container>
      <Text>Eduardo: {result.eduardo}</Text>
      <Text>Fontana: {result.fontana}</Text>
      <Text>Adicionar nome</Text>
      <TextInput onChangeText={(t) => setName(t.trim())}></TextInput>
      <Button title='Adicionar' onPress={() =>{ handleNewName(name)}}></Button>

  
      <FlatList
        data={names}
        renderItem={(item) =>(
          <ArrayText>{item.item}</ArrayText>
        )}
      />
     
     <Button title='Next Screen' onPress={() =>{ NextScreen()}}></Button>
     
    </Container>

  )
}