import React from 'react'
import { SafeAreaView, TextInput, View, ScrollView } from 'react-native'
import { FormContratista } from '../components/FormContratista'
import { Contratistas } from '../components/Contratistas'
import styles from '../styles'
export const AltaContratista = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormContratista/>
        {/* <Contratistas/> */}
        </ScrollView>
    </SafeAreaView>
  )
}
