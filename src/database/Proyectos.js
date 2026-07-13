import { supabase } from "./Index";

export const getProyectos = async () => {
  let resp;
  try {
    const { data } = await supabase
      .from('Proyectos')
      .select('*');
    resp = data;
    console.log(resp)
  } catch (e) {
    console.log('Error al obtener Proyectos', e)
    resp = null;
  } finally {
    return resp;
  }
}
export const saveProyecto = async (nombre, fechaInicio, fechaFin, descripcion, IdContratistas, frentesDeObra, costoObra) => {
  let obra = {
    nombre: nombre,
    fecha_inicio: fechaInicio,
    fecha_fin_estimada: fechaFin,
    descripcion: descripcion
  }

  try {
    const { data } = await supabase.from("Proyectos").insert([obra]).select("id").single();
    const proyectoId = data.id

    if (IdContratistas?.length > 0) {
      await insertContratistaPorProyecto(proyectoId, IdContratistas)
    }

    if(frentesDeObra?.length > 0) {
      await insertFrentesDeObraPorProyecto(proyectoId, frentesDeObra)
    }

     if(costoObra?.length > 0) {
      await insertCostoFrentePorProyecto(proyectoId, costoObra)
    }
    
    

    return data;
  } catch (e) {
    console.log("Error al ingresar la obra", e)
    return null;
  }

}


export const insertContratistaPorProyecto = async (proyectoId, IdContratistas) => {
  console.log(IdContratistas)
  const filas = IdContratistas.map((contratistaId) => ({
    id_proyecto: proyectoId,
    id_contratista: contratistaId,
  }))

  try {
    const { data, error } = await supabase
      .from("Proyecto_Contratista")
      .insert(filas)
      .select()

    if (error) throw error
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const insertFrentesDeObraPorProyecto = async(proyectoId, idFrentesDeObra) => {
  const frenteObra = idFrentesDeObra.map((frenteObra) => ({
    id_proyecto: proyectoId,
    latitud: frenteObra.latitud,
    longitud: frenteObra.longitud,
    nombre: frenteObra.nombre
  }))
  

  try {
    const { data, error } = await supabase
      .from("Frente_Obras")
      .insert(frenteObra)
      .select()

    if (error) {
      console.log(error)

    } 
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const insertCostoFrentePorProyecto = async(proyectoId, costos) => {
  const costoObra = costos.map((costo) => ({
    proyecto_id: proyectoId,
    tipo_costo: costo.nombre,
    monto: costo.monto
  }))
  

  try {
    const { data, error } = await supabase
      .from("Costo_Obra")
      .insert(costoObra)
      .select()

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



export const saveContratista = async (nombre, apellido, telefono, especialidad) => {
  let contratista = {
    nombre: nombre,
    telefono: telefono,
    apellido: apellido,
    especialidad: especialidad,
    created_at: new Date()

  }

  try {
    const { data, error } = await supabase.from('Contratistas').insert([contratista]).select();
    return data;
  } catch (e) {
    console.log('ERROR AL INGRESAR PERSONA ->', e)
    return null;
  }

}