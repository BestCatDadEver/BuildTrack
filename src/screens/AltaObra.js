import React, { useState } from "react"
import { SafeAreaView, ScrollView, TextInput, View } from "react-native"
import { FomrObra } from "../components/FomrObra"
import styles from "../styles"

export const AltaObra = () => {


  return (
    <SafeAreaView style={styles.container}>
      <FomrObra/>
    </SafeAreaView>
  )
}
