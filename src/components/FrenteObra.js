import React, { useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"

export const FrenteObra = ({cerrarModal}) => {
  const [nombre, setNombre] = useState()
  const [direccion, setDireccion] = useState()

  return (
    <SafeAreaView>
      <View>
        <View>
          <TextInput style={style.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
          <TextInput style={style.input} placeholder="Direccion" value={direccion} onChangeText={setDireccion} />
        </View>
        <View>
          <Pressable>
            <Text>Agregar</Text>
          </Pressable>
          <Pressable onPress={cerrarModal}>
            <Text>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
})
