import React, { useState } from "react"
import { Modal, Pressable, Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import { FrenteObra } from "./FrenteObra"
import styles from "../styles"

export const FomrObra = () => {
  const [nombreObra, SetnombreObra] = useState("")
  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [mostrarSelectorFecha, setMostrarSelectorFecha] = useState(false)
  const [fechaFin, setFechaFin] = useState(new Date())
  const [estadoModal, setEstado] = useState(false)
  const [frentes, setFrentes] = useState([])

  const abrirModal = () => {
    setEstado(true)
  }
  const cerrarModal = () => {
    setEstado(false)
  }
  const agregarFrente = (frente) => {
    setFrentes([...frentes, frente])
    cerrarModal()
  }

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Agregar Nueva Obra</Text>
      </View> */}

      <View>
        <Text style={styles.label}>Nombre de la obra</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Complejo San Eduardo"
          placeholderTextColor="#1B365D"
          value={nombreObra}
          onChangeText={SetnombreObra}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>Fecha Inicio</Text>
          <Pressable onPress={() => setMostrarSelectorFecha(true)} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{fechaInicio.toLocaleDateString()}</Text>
          </Pressable>
          {mostrarSelectorFecha && (
            <DateTimePicker
              value={fechaInicio}
              mode="date"
              display="default"
              onChange={(evento, fechaSeleccionada) => {
                setMostrarSelectorFecha(false)
                if (fechaSeleccionada) {
                  setFechaInicio(fechaSeleccionada)
                }
              }}
            />
          )}
        </View>

        <View style={styles.col}>
          <Text style={styles.label}>Fecha de Fin</Text>
          <Pressable onPress={() => setMostrarSelectorFecha(true)} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{fechaFin.toLocaleDateString()}</Text>
          </Pressable>
          {mostrarSelectorFecha && (
            <DateTimePicker
              value={fechaFin}
              mode="date"
              display="default"
              onChange={(evento, fechaSeleccionada) => {
                setMostrarSelectorFecha(false)
                if (fechaSeleccionada) {
                  setFechaFin(fechaSeleccionada)
                }
              }}
            />
          )}
        </View>
      </View>

      <View>
        <Text style={styles.subtitle}>Frentes de Obra</Text>
        <Pressable style={styles.secondaryButton} onPress={abrirModal}>
          <Text style={styles.secondaryButtonText}>+ Agregar frente de obra</Text>
        </Pressable>
        <Modal animationType="slide" visible={estadoModal} style={styles.container}>
          <FrenteObra cerrarModal={cerrarModal} AgregarFrenteObra={agregarFrente} />
        </Modal>
      </View>
      {/* espacio */}
      <View>
        <Text style={styles.subtitle}>Contratistas</Text>
        <Pressable style={styles.secondaryButton} onPress={abrirModal}>
          <Text style={styles.secondaryButtonText}>+ Agregar Contratista</Text>
        </Pressable>
        <Modal animationType="slide" visible={estadoModal} style={styles.container}>
          <FrenteObra cerrarModal={cerrarModal} AgregarFrenteObra={agregarFrente} />
        </Modal>
      </View>
    </ScrollView>
  )
}
