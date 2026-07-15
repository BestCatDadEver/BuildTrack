import React, { useEffect, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { saveContratista, updateContratistaDb } from "../database/Contratistas"
import { useDispatch, useSelector } from 'react-redux';
import { addContratista, updateContratista, clearSelectedContratista } from "../redux/ContratistaSlice"
import styles from "../styles"
import { Contratistas } from "./Contratistas"

export const FormContratista = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [especialidad, setEspecialidad] = useState("")
  const [telefono, setTelefono] = useState("")

  const dispatch = useDispatch();
  const selectedContratista = useSelector(state => state.contratistas.selectedContratista);
  const estasEditando = !!selectedContratista

  useEffect(() => {
    if (selectedContratista) {
      setNombre(selectedContratista.nombre ?? "")
      setapellido(selectedContratista.apellido ?? "")
      setEspecialidad(selectedContratista.especialidad ?? "")
      setTelefono(selectedContratista.telefono ?? "")
    }
  }, [selectedContratista])

  const resetForm = () => {
    setNombre("")
    setapellido("")
    setEspecialidad("")
    setTelefono("")
  }

  const altaContratistaClick = async () => {
    const data = await saveContratista(nombre, apellido, telefono, especialidad)
    if (data) {
      dispatch(addContratista(data))
    }

    resetForm()
  }

  const updateContratistaClick = async () => {
    const contratista = {
      id: selectedContratista.id,
      nombre,
      apellido,
      especialidad,
      telefono
    }
    const data = await updateContratistaDb(contratista)
    dispatch(updateContratista(data ?? contratista))
    dispatch(clearSelectedContratista())
    resetForm()
  }

  const cancelClick = () => {
    dispatch(clearSelectedContratista())
    resetForm()
  }

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#1B365D"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#1B365D"
          value={apellido}
          onChangeText={setapellido}
        />
        <TextInput
          style={styles.input}
          placeholder="Especialidad"
          placeholderTextColor="#1B365D"
          value={especialidad}
          onChangeText={setEspecialidad}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#1B365D"
          value={telefono}
          onChangeText={setTelefono}
        />
      </View>

      <View>
        {estasEditando ? (
          <View>
            <Pressable style={styles.secondaryButton} onPress={updateContratistaClick}>
              <Text style={styles.secondaryButtonText}>Aceptar</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton} onPress={cancelClick}>
              <Text style={styles.secondaryButtonText}>Cancelar</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable style={styles.secondaryButton} onPress={altaContratistaClick}>
            <Text style={styles.secondaryButtonText}>Agregar</Text>
          </Pressable>
        )}
      </View>

      {/* Lista de contratistas abajo */}
      <View style={{ marginTop: 20 }}>
        <Contratistas />
      </View>
    </View>
  )
}
