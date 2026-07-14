import { supabase } from "./Index"

export const getProyectos = async () => {
  let resp
  try {
    const { data } = await supabase.from("Proyectos").select("*")
    resp = data
    console.log(resp)
  } catch (e) {
    console.log("Error al obtener Proyectos", e)
    resp = null
  } finally {
    return resp
  }
}
export const saveProyecto = async (nombre, fechaInicio, fechaFin, descripcion, IdContratistas, frentesDeObra, costoObra) => {
  let obra = {
    nombre: nombre,
    fecha_inicio: fechaInicio,
    fecha_fin_estimada: fechaFin,
    descripcion: descripcion,
  }

  try {
    const { data } = await supabase.from("Proyectos").insert([obra]).select("id").single()
    const proyectoId = data.id

    if (IdContratistas?.length > 0) {
      await insertContratistaPorProyecto(proyectoId, IdContratistas)
    }

    if (frentesDeObra?.length > 0) {
      await insertFrentesDeObraPorProyecto(proyectoId, frentesDeObra)
    }

    if (costoObra?.length > 0) {
      await insertCostoFrentePorProyecto(proyectoId, costoObra)
    }

    return data
  } catch (e) {
    console.log("Error al ingresar la obra", e)
    return null
  }
}

export const insertContratistaPorProyecto = async (proyectoId, IdContratistas) => {
  console.log(IdContratistas)
  const filas = IdContratistas.map((contratistaId) => ({
    id_proyecto: proyectoId,
    id_contratista: contratistaId,
  }))

  try {
    const { data, error } = await supabase.from("Proyecto_Contratista").insert(filas).select()

    if (error) throw error
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const insertFrentesDeObraPorProyecto = async (proyectoId, idFrentesDeObra) => {
  const frenteObra = idFrentesDeObra.map((frenteObra) => ({
    id_proyecto: proyectoId,
    latitud: frenteObra.latitud,
    longitud: frenteObra.longitud,
    nombre: frenteObra.nombre,
  }))

  try {
    const { data, error } = await supabase.from("Frente_Obras").insert(frenteObra).select()

    if (error) {
      console.log(error)
    }
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const insertCostoFrentePorProyecto = async (proyectoId, costos) => {
  const costoObra = costos.map((costo) => ({
    proyecto_id: proyectoId,
    tipo_costo: costo.tipo_costo,
    monto: costo.monto,
  }))

  try {
    const { data, error } = await supabase.from("Costo_Obra").insert(costoObra).select()

    console.log(costoObra)

    if (error) {
      console.log(error)
    }
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const eliminarProyecto = async (id) => {
  try {
    const { error } = await supabase.from("Proyectos").delete().eq("id", id)
    if (error) throw error
    return true
  } catch (e) {
    console.log("Error al eliminar el proyecto", e)
    return false
  }
}

export const calcularCosto = async (id) => {
  try {
    const { data, error } = await supabase.from("Costo_Obra").select("monto").eq("id_proyecto", id)
    if (error) throw error
    let total = 0

    data.forEach((costo) => {
      total += costo.monto
    })

    return total
  } catch (e) {
    console.log("Error al eliminar el proyecto", e)
    return null
  }
}


export const editarProyecto = async (id, nombre, fechaInicio, fechaFin, descripcion, IdContratistas, frentesDeObra, costoObra) => {
  try {
    const { data, error } = await supabase
      .from("Proyectos")
      .update({
        nombre: nombre,
        fecha_inicio: fechaInicio,
        fecha_fin_estimada: fechaFin,
        descripcion: descripcion,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    await supabase.from("Proyecto_Contratista").delete().eq("id_proyecto", id)
    if (IdContratistas?.length > 0) {
      await insertContratistaPorProyecto(id, IdContratistas)
    }

    await supabase.from("Frente_Obras").delete().eq("id_proyecto", id)
    if (frentesDeObra?.length > 0) {
      await insertFrentesDeObraPorProyecto(id, frentesDeObra)
    }

    await supabase.from("Costo_Obra").delete().eq("proyecto_id", id)
    if (costoObra?.length > 0) {
      await insertCostoFrentePorProyecto(id, costoObra)
    }

    return data
  } catch (e) {
    console.log("Error al editar la obra", e)
    return null
  }
}
