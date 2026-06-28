import React, { useState } from "react"
import { Modal, Pressable, Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import { FrenteObra } from "./FrenteObra"

export const FomrObra = () => {
  const [nombreObra, SetnombreObra] = useState("")
  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [mostrarSelectorFecha, setMostrarSelectorFecha] = useState(false)
  const [fechaFin, setFechaFin] = useState(new Date())
  const [estadoModal, setEstado] = useState(false)

  const abrirModal = () => {
    setEstado(true)
  }
  const cerrarModal = () => {
    setEstado(false)
  }

  return (
    <ScrollView>
      <View>
        <Text>Agregar Nueva Obra</Text>
      </View>
      <View>
        <TextInput placeholder="Nombre de la obra" onChange={SetnombreObra} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text>Fecha Inicio</Text>
          <Pressable
            onPress={() => setMostrarSelectorFecha(true)}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 12,
              borderRadius: 5,
            }}>
            <Text>{fechaInicio.toLocaleDateString()}</Text>
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
        <View>
          <Text>Fecha de Fin</Text>
          <Pressable
            onPress={() => setMostrarSelectorFecha(true)}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 12,
              borderRadius: 5,
            }}>
            <Text>{fechaInicio.toLocaleDateString()}</Text>
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
        <Text>Frentes de Obra</Text>
        <Pressable onPress={abrirModal}>
          <Text>Agregar frente de obra</Text>
        </Pressable>
        <Modal animationType="slide" visible={estadoModal}>
          <FrenteObra cerrarModal={cerrarModal}/>
        </Modal>
      </View>
    </ScrollView>
  )
}
