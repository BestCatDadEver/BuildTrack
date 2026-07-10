import React, { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { saveContratista } from "../database/Contratistas"
import { useDispatch, useSelector } from "react-redux"
import { addContratista } from "../redux/ContratistaFormSlice"
import styles from "../styles"
import { Contratistas } from "./Contratistas"

export const FormContratista = () => {
  const dispatch = useDispatch()
  const [nombre, setNombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [especialidad, setEspecialidad] = useState("")
  const [telefono, setTelefono] = useState("")

  const altaContratistaClick = async () => {
    const data = await saveContratista(nombre, apellido, telefono, especialidad)
    dispatch(addContratista(data))
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#1B365D" value={nombre} onChangeText={setNombre} />
        <TextInput style={styles.input} placeholder="Apellido" placeholderTextColor="#1B365D" value={apellido} onChangeText={setapellido} />
        <TextInput
          style={styles.input}
          placeholder="Especialidad"
          placeholderTextColor="#1B365D"
          value={especialidad}
          onChangeText={setEspecialidad}
        />
        <TextInput style={styles.input} placeholder="Teléfono" placeholderTextColor="#1B365D" value={telefono} onChangeText={setTelefono} />
      </View>

      <View>
        <Pressable style={styles.secondaryButton} onPress={altaContratistaClick}>
          <Text style={styles.secondaryButtonText}>Agregar</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>
        <Contratistas />
      </View>
    </View>
  )
}
