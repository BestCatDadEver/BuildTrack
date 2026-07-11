import React, { useState } from "react"
import { SafeAreaView, View } from "react-native"
import styles from "../styles"

export const selectContratistas = () => {
  const [ListContratistas, setContratista] = useState([])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contratistas</Text>
        </View>
        <View>
          {ListContratistas?.length > 0 ? (
            ListContratistas.map((contratista) => <ObraInfo key={obra.id} obra={obra} />)
          ) : (
            <Text>No hay Contratistas</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}
