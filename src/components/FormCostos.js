import React, { useState } from "react"
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native"
import styles from "../styles"
import { useDispatch } from "react-redux"

import { saveCosto } from "../database/costoObraDb"
import { agregarCosto } from "../redux/CostoSlice"


export const FormCostos = ({ cerrarModal }) => {
  const [tipo_costo, setTipoCosto] = useState("")
  const [monto, setMonto] = useState("")

  const dispach = useDispatch()

//   const guardarCosto = async () => {
//     const data = await saveCosto(nombre,Number(monto))
//     if (data) {
//       dispach(agregarCosto(data.id))
//     }
//   }

  const guardar = () => {
    dispach(agregarCosto({tipo_costo,monto}));
    setNombre("")
    setMonto("")
    cerrarModal()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Costo de obra</Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#9A958A" value={tipo_costo} onChangeText={setTipoCosto} />
          <TextInput style={styles.input} placeholder="Monto" placeholderTextColor="#9A958A" value={monto} onChangeText={setMonto} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Pressable style={styles.button} onPress={()=>guardar()}>
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
