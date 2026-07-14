import React, { useCallback, useState } from "react"
import { Pressable, SafeAreaView, ScrollView, Text, ActivityIndicator, Modal } from "react-native"
import { View } from "react-native"
import { ObraInfo } from "../components/ObraInfo"
import { useNavigation } from "@react-navigation/native"
import styles from "../styles"
import { getProyectos, eliminarProyecto } from "../database/Proyectos"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FlatList } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { getFrente } from "../database/frenteObraDb"
import { DetalleObra } from "../components/DetalleObra"

export const Listado = () => {
  const navigation = useNavigation()
  const [listaObras, setListaObras] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const [modalEstado, setModalEstado] = useState(false)
  const [obraParaDetalle,setObraDetalle] = useState(null)

  const obtenerObras = async () => {
    setLoading(true)
    const data = await getProyectos()
    setListaObras(data)
    setLoading(false)
  }

  const cerrarModal =()=>{
    setObraDetalle(null)
    setModalEstado(false)
    
  }
  const abrirModal=(obra)=>{
    setObraDetalle(obra)
    setModalEstado(true)

  }


  //   const obtenerFrentes = async()=>{
  //     const data = await getFrente()
  //     console.log('frentes', data)
  //     //frentes [{"id": "cced757b-01f8-4d8a-bc50-5847de0a72ae", "id_proyecto": "eaf13de6-8199-409e-9c63-2e01a3aa5853", "latitud": "123", "longitud": "123213", "nombre": "Esquina 123"}]
  //   }
  const eliminarObra = async (id) => {
    eliminarProyecto(id)
    obtenerObras()
  }

  useFocusEffect(
    useCallback(() => {
      setListaObras([])
      obtenerObras()
      //   obtenerFrentes()
      //   console.log(listaObras)
    }, []),
  )

  if (loading) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="large" color="#1B365D" />
        <Text>Cargando obras...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          {listaObras?.length > 0 ? (
            <View>
              {listaObras.map((obra) => (
                <ObraInfo key={obra.id} obra={obra} eliminar={eliminarObra} onPress={()=>abrirModal(obra)} />
              ))}
            </View>
          ) : (
            <View style={styles.containerEmptyState}>
              <Text style={styles.textEmptyState}>No hay obras</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Pressable
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: 30,
          borderColor: "#1B365D",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8efd8",
          elevation: 5, // Android
          shadowOpacity: 0.3, // iOS
        }}
        onPress={() => navigation.navigate("AltaObra")}>
        <Text style={{ color: "#1B365D", fontSize: 30 }}>+</Text>
      </Pressable>
      
        <Modal animationType="slide" visible={modalEstado} backdropColor={"#94A3B8"} style={styles.container}>
          <DetalleObra obra={obraParaDetalle} cerrarModal={cerrarModal} />
        </Modal>
    </SafeAreaView>
  )
}
