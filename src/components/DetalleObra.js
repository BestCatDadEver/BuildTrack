import React, { useEffect, useState } from "react"
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native"
import styles from "../styles"
import { getFrentesPorProyecto } from "../database/frenteObraDb"
import { getCostosPorProyecto } from "../database/costoObraDb"
import { getContratistasPorProyecto } from "../database/Contratistas"
import { calcularCosto } from "../database/Proyectos"

export const DetalleObra = ({ obra, cerrarModal }) => {
  const [contratistas, setContratistas] = useState([])
  const [frentes, setFrentes] = useState([])
  const [costos, setCostos] = useState([])
  const [costoAcmulado, setCostoAcum] = useState(0)


  useEffect(() => {
    if (obra) {
      cargarDatosObra()
    }
  }, [obra])
  if (!obra) {
    return null
    //sin esto al cerrar la obra queda en null y rompe todo porque lee null.nombre
  }
  const cargarDatosObra = async () => {
    const [frentesDb, costosDb, contratistasDb, costoAcmuladoDb] = await Promise.all([
      getFrentesPorProyecto(obra.id),
      getCostosPorProyecto(obra.id),
      getContratistasPorProyecto(obra.id),
      calcularCosto(obra.id),
    ])
    console.log(costoAcmuladoDb)
    setFrentes(frentesDb)
    setCostos(costosDb)
    setContratistas(contratistasDb)
    setCostoAcum(costoAcmuladoDb)
  }
  const limpiar = () => {
  setContratistas([])
  setFrentes([])
  setCostos([])
  setCostoAcum(0)
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.header, { alignItems: "center" }]}>
        <Text style={styles.title}>Detalles de la obra</Text>
      </View>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.label}>Nombre</Text>
          <View style={styles.input}>
            <Text style={styles.secondaryButtonText}>{obra.nombre}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Fecha de Inicio</Text>
          <View style={styles.input}>
            <Text style={styles.secondaryButtonText}>{obra.fecha_inicio}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Fin estimado</Text>
          <View style={styles.input}>
            <Text style={styles.secondaryButtonText}>{obra.fecha_fin_estimada}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Descripcion</Text>
          <View style={styles.input}>
            <Text style={styles.secondaryButtonText}>{obra.descripcion}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.label}>Contratistas</Text>
          {contratistas.map((contratista) => (
            <View key={contratista.id} style={[styles.input, { flexDirection: "row" }]}>
              <Text style={styles.secondaryButtonText}>{contratista.nombre} -- </Text>
              <Text style={styles.secondaryButtonText}>{contratista.apellido} -- </Text>
              <Text style={styles.secondaryButtonText}>{contratista.especialidad} </Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.label}>Frentes</Text>
          {frentes.map((frente) => (
            <View key={frente.id} style={[styles.input, { flexDirection: "row" }]}>
              <Text style={styles.secondaryButtonText}>{frente.nombre} -- </Text>
              <Text style={styles.secondaryButtonText}>Lat: {frente.latitud} -- </Text>
              <Text style={styles.secondaryButtonText}>Long: {frente.longitud} </Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.label}>Frentes</Text>
          {costos.map((costo) => (
            <View key={costo.id} style={[styles.input, { flexDirection: "row" }]}>
              <Text style={styles.secondaryButtonText}>{costo.tipo_costo} -- </Text>
              <Text style={styles.secondaryButtonText}> Monto: ${costo.monto}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.label}>Costo Acumulado</Text>
          <View style={styles.input}>
            <Text style={styles.secondaryButtonText}>${costoAcmulado}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ padding: 20 }}>
        <Pressable style={styles.secondaryButton} onPress={()=>{cerrarModal(),limpiar()}}>
          <Text style={styles.secondaryButtonText}>Volver</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
