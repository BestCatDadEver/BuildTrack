import React from 'react'
import { SafeAreaView, TextInput, View } from 'react-native'
import { FormContratista } from '../components/FormContratista'
import { Contratistas } from '../components/Contratistas'

export const AltaContratista = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <FormContratista/>
        <Contratistas/>
    </SafeAreaView>
  )
}
