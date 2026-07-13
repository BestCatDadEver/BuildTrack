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
export const saveProyecto = async (nombre,fechaInicio,fechaFin,descripcion) =>{
  let obra ={
    nombre: nombre,
    fecha_inicio:fechaInicio,
    fecha_fin_estimada:fechaFin,
    descripcion:descripcion
  }

  try {
    const { data } = await supabase.from("Proyectos").insert([obra]).select();
    return data;
  } catch(e) {
    console.log("Error al ingresar la obra")
    return null;
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