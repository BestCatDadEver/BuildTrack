import React, { useState } from "react"
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native"
import styles from "../styles" 
import { useDispatch } from "react-redux"
import { agregarFrente } from "../redux/frenteSlice";

export const FrenteObra = ({ cerrarModal, AgregarFrenteObra }) => {
  const [nombre, setNombre] = useState("")
  const [latitud, setLatitud] = useState("")
  const [longitud, setLongitud] = useState("")
  const dispach = useDispatch();

  const guardar = () => {
    dispach(agregarFrente({nombre,latitud,longitud}));
    setNombre("")
    setLatitud("")
    setLongitud("")
    cerrarModal()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Nuevo Frente de Obra</Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#9A958A" value={nombre} onChangeText={setNombre} />
          <TextInput style={styles.input} placeholder="Latitud" placeholderTextColor="#9A958A" value={latitud} onChangeText={setLatitud} />
          <TextInput
            style={styles.input}
            placeholder="Longitud"
            placeholderTextColor="#9A958A"
            value={longitud}
            onChangeText={setLongitud}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Pressable style={styles.button} onPress={guardar}>
            <Text style={styles.buttonText}>Agregar</Text>
          </Pressable>

          <Pressable style={[styles.secondaryButton, { marginTop: 10 }]} onPress={cerrarModal}>
            <Text style={styles.secondaryButtonText}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
