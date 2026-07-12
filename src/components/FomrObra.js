import React, { useState } from "react"
import { Modal, Pressable, Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import { FrenteObra } from "./FrenteObra"
import styles from "../styles"
import { CardFrente } from "./CardFrente"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { eliminarFrente } from "../redux/frenteSlice"
import { SelectContratistas } from "./SelectContratistas"

export const FomrObra = () => {
  const dispach = useDispatch()
  const [nombreObra, SetnombreObra] = useState("")
  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [mostrarSelectorFecha, setMostrarSelectorFecha] = useState(false)
  const [fechaFin, setFechaFin] = useState(new Date())
  const [modalFrente, setModalFrente] = useState(false)
  const [modalContratista, setModalContratista] = useState(false)

  // const [frentes, setFrentes] = useState([])
  const frentes = useSelector((store) => store.frente.frentes)
  // const contratistas = useSelector((store) => store.contratistas.contratistasList)
  const deleteFrente = (frenteId) => {
    dispach(eliminarFrente(frenteId))
  }

  // const abrirModal = () => {
  //   setEstado(true)
  // }
  // const cerrarModal = () => {
  //   setEstado(false)
  // }
  const abrirModalFrente = () => {
    setModalFrente(true)
  }

  const cerrarModalFrente = () => {
    setModalFrente(false)
  }

  const abrirModalContratista = () => {
    setModalContratista(true)
  }

  const cerrarModalContratista = () => {
    setModalContratista(false)
  }

  const abrirModalCostos = () => {
    setModalContratista(true)
  }

  const cerrarModalCostos = () => {
    setModalContratista(false)
  }

  const agregarFrente = () => {
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
        <Pressable style={styles.secondaryButton} onPress={abrirModalFrente}>
          <Text style={styles.secondaryButtonText}>+ Agregar frente de obra</Text>
        </Pressable>
        <Modal animationType="slide" visible={modalFrente} style={styles.container}>
          <FrenteObra cerrarModal={cerrarModalFrente} AgregarFrenteObra={agregarFrente} />
        </Modal>
        {frentes?.length > 0 ? (
          <View>
            {frentes.map((frente) => (
              <CardFrente key={frente.id} frente={frente} eliminar={deleteFrente} />
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>
      {/* espacio */}
      <View>
        <Text style={styles.subtitle}>Contratistas</Text>
        <Pressable style={styles.secondaryButton} onPress={abrirModalContratista}>
          <Text style={styles.secondaryButtonText}>+ Agregar Contratista</Text>
        </Pressable>
        <Modal animationType="slide" visible={modalContratista} style={styles.container}>
          <SelectContratistas cerrarModal={cerrarModalContratista} />
        </Modal>
        {frentes?.length > 0 ? (
          <View>
            {frentes.map((frente) => (
              <CardFrente key={frente.id} frente={frente} eliminar={deleteFrente} />
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>
      <View>
        <Text style={styles.subtitle}>Costos de obra</Text>
        <Pressable style={styles.secondaryButton} onPress={abrirModalContratista}>
          <Text style={styles.secondaryButtonText}>+ Agregar Costos</Text>
        </Pressable>
        <Modal animationType="slide" visible={modalContratista} style={styles.container}>
          <FormCosto cerrarModal={cerrarModalContratista} />
        </Modal>
      </View>
    </ScrollView>
  )
}
