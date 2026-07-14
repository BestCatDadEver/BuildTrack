import React, { useEffect, useState } from "react"
import { Modal, Pressable, Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"
import { FrenteObra } from "./FrenteObra"
import styles from "../styles"
import { CardFrente } from "./CardFrente"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { eliminarFrente, limpiarFrentes, agregarFrente } from "../redux/frenteSlice"
import { SelectContratistas } from "./SelectContratistas"
import { FormCostos } from "./FormCostos"
import { getFrentesId, getFrentesPorProyecto } from "../database/frenteObraDb"
import { store } from "../store/Index"
import { CardCostos } from "./CardCostos"
import { eliminarCosto, limpiarCostos, agregarCosto } from "../redux/CostoSlice"
import { CardContratista } from "./CardContratista"
import { getContratistasIds, getContratistasPorProyecto } from "../database/Contratistas"
import { eliminarContratista, limpiarObra, agregarContratistaObra } from "../redux/ObraSlice"
import { saveProyecto, editarProyecto } from "../database/Proyectos"
import { useNavigation, useRoute } from "@react-navigation/native"
import { getCostosPorProyecto } from "../database/costoObraDb"

export const FomrObra = () => {
  const dispatch = useDispatch()
  const navegation = useNavigation()
  const [nombreObra, SetnombreObra] = useState("")
  const [fechaInicio, setFechaInicio] = useState(new Date())
  const [mostrarInicio, setMostrarInicio] = useState(false)
  const [mostrarFin, setMostrarFin] = useState(false)
  const [fechaFin, setFechaFin] = useState(new Date())
  const [modalFrente, setModalFrente] = useState(false)
  const [modalContratista, setModalContratista] = useState(false)
  const [modalCostos, setModalCostos] = useState(false)
  const frentes = useSelector((store) => store.frente.frentes)
  const costos = useSelector((store) => store.Costo.costos)
  const IdContratistas = useSelector((store) => store.Obra.IdContratistas)
  const [contratistas, setContratistas] = useState([])
  const [descripcion, setDescripcion] = useState("")

  const route = useRoute()
  const { accion, obra } = route.params ?? {}

  // const [frentes, setFrentes] = useState([])

  const deleteFrente = (frenteId) => {
    dispatch(eliminarFrente(frenteId))
  }
  const deleteCosto = (costoId) => {
    dispatch(eliminarCosto(costoId))
  }
  const deleteContratista = (id) => {
    dispatch(eliminarContratista(id))
  }

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
    setModalCostos(true)
  }
  const cerrarModalCostos = () => {
    setModalCostos(false)
  }
  const agregarFrentes = () => {
    cerrarModal()
  }

  const resetForm = () => {
    setDescripcion("")
    setFechaFin(new Date())
    setFechaInicio(new Date())
    SetnombreObra("")
    setContratistas([])
    dispatch(limpiarFrentes())
    dispatch(limpiarCostos())
    dispatch(limpiarObra())
  }

  const cancelarObra = () => {
    resetForm()
    navegation.goBack()
  }

  const agregarObra = async () => {
    const data = await saveProyecto(nombreObra, fechaInicio, fechaFin, descripcion, IdContratistas, frentes, costos)
    dispatch(saveProyecto)
    resetForm()
    navegation.goBack()
  }

  const modificarObra = async () => {
    const data = await editarProyecto(obra.id, nombreObra, fechaInicio, fechaFin, descripcion, IdContratistas, frentes, costos)
    resetForm()
    navegation.goBack()
  }

  // useEffect(() => {
  //   const cargarFrentes = async () => {
  //     const data = await getFrentesId(frentesId)
  //     console.log(data)
  //     setFrentes(data)
  //   }
  //   if (frentesId.length > 0) {
  //     cargarFrentes()
  //   } else {
  //     setFrentes([])
  //   }
  // }, [frentesId])

  useEffect(() => {
    const cargarContratistas = async () => {
      const data = await getContratistasIds(IdContratistas)
      setContratistas(data)
    }

    if (IdContratistas.length >= 0) {
      cargarContratistas()
    }
  }, [IdContratistas])

  useEffect(() => {
    const cargarDatosObra = async () => {
      if (accion === "modificar" && obra) {
        SetnombreObra(obra.nombre)
        setFechaInicio(new Date(obra.fecha_inicio))
        setFechaFin(new Date(obra.fecha_fin_estimada))
        setDescripcion(obra.descripcion)

        //Se usa Promise.All para esperar que las 3 operaciones se completen.
        const [frentesDb, costosDb, contratistasDb] = await Promise.all([
          getFrentesPorProyecto(obra.id),
          getCostosPorProyecto(obra.id),
          getContratistasPorProyecto(obra.id),
        ])
        console.log('costos mod:',costosDb)
        dispatch(limpiarFrentes())
        frentesDb.forEach((f) => dispatch(agregarFrente(f)))

        dispatch(limpiarCostos())
        costosDb.forEach((c) => dispatch(agregarCosto(c)))

        dispatch(limpiarObra())
        contratistasDb.forEach((c) => dispatch(agregarContratistaObra(c.id)))
      }
    }
    cargarDatosObra()
  }, [accion, obra])

  //Para que funcione el reset del form cuando se navega hacia atrás.
  useEffect(() => {
    const unsubscribe = navegation.addListener("beforeRemove", () => {
      resetForm()
    })
    return unsubscribe
  }, [navegation])

  return (
    <ScrollView style={styles.container}>


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
          <Pressable onPress={() => setMostrarInicio(true)} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{fechaInicio.toLocaleDateString()}</Text>
          </Pressable>
          {mostrarInicio && (
            <DateTimePicker
              value={fechaInicio}
              mode="date"
              display="default"
              onChange={(evento, fechaSeleccionada) => {
                setMostrarInicio(false)
                if (fechaSeleccionada) {
                  setFechaInicio(fechaSeleccionada)
                }
              }}
            />
          )}
        </View>

        <View style={styles.col}>
          <Text style={styles.label}>Fecha de Fin</Text>
          <Pressable onPress={() => setMostrarFin(true)} style={styles.dateButton}>
            <Text style={styles.dateButtonText}>{fechaFin.toLocaleDateString()}</Text>
          </Pressable>
          {mostrarFin && (
            <DateTimePicker
              value={fechaFin}
              mode="date"
              display="default"
              onChange={(evento, fechaSeleccionada) => {
                setMostrarFin(false)
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
        <Modal animationType="slide" visible={modalFrente} backdropColor={"#94A3B8"} style={styles.container}>
          <FrenteObra cerrarModal={cerrarModalFrente} AgregarFrenteObra={agregarFrentes} />
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
        <Modal animationType="slide" visible={modalContratista} backdropColor={"#94A3B8"} style={styles.container}>
          <SelectContratistas cerrarModal={cerrarModalContratista} />
        </Modal>
        {contratistas?.length > 0 ? (
          <View>
            {contratistas.map((contratista) => (
              <CardContratista key={contratista.id} contratista={contratista} eliminar={deleteContratista} />
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>
      <View>
        <Text style={styles.subtitle}>Costos de obra</Text>
        <Pressable style={styles.secondaryButton} onPress={abrirModalCostos}>
          <Text style={styles.secondaryButtonText}>+ Agregar Costos</Text>
        </Pressable>
        <Modal animationType="slide" visible={modalCostos} backdropColor={"#94A3B8"} style={styles.container}>
          <FormCostos cerrarModal={cerrarModalCostos} />
        </Modal>
        {costos?.length > 0 ? (
          <View>
            {costos.map((costo) => (
              <CardCostos key={costo.id} costo={costo} eliminar={deleteCosto} />
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>

      <Text style={styles.subtitle}>Descripción</Text>

      <View style={[styles.margintop]}>
        <TextInput
          style={styles.inputDescripcion}
          placeholderTextColor="#1B365D"
          multiline={true}
          value={descripcion}
          onChangeText={setDescripcion}
          placeholder="Casa de campo - Los Pinos"
        />
      </View>

      <View style={[styles.row, styles.margintop]}>
        <Pressable onPress={cancelarObra} style={styles.cancelarObraButton}>
          <Text style={styles.cancelarObraButtonText}>Cancelar Obra</Text>
        </Pressable>
        <Pressable style={styles.confirmarObraButton} onPress={accion === "modificar" ? modificarObra : agregarObra}>
          <Text style={styles.confirmarObraButtonText}>{accion === "modificar" ? "Modificar Obra" : "Confirmar Obra"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
