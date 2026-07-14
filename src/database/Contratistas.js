import { supabase } from "./Index";

export const getContratistasDb = async () => {
  let resp;
  try {
    const { data } = await supabase
      .from('Contratistas')
      .select('*');
    resp = data;
    console.log(resp)
  } catch (e) {
    console.log('Error al obtener contratistas', e)
    resp = null;
  } finally {
    return resp;
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

export const deleteContratistaDb = async (id) => {
  try {

    const resp = await supabase
      .from('Contratistas')
      .delete()
      .eq('id', id);
    console.log('SE ELIMINO CORRECTAMENTE')

  } catch (e) {
    console.log('ERROR AL ELIMINAR PERSONA -> ', e)
  }
}

export const updateContratistaDb = async (modificados) => {
  try {
    const { data } = await supabase
      .from('Contratistas')
      .update(modificados)
      .eq('id', modificados.id)
      .select();

    console.log('SE MODIFICARON LOS DATOS')
    return data;
  } catch (e) {
    console.log('Error al actualizar datos -> ', e)
    return null;
  }
}

export const getContratistasIds = async (ids) => {
  try {
    const { data, error } = await supabase
      .from('Contratistas')
      .select('*')
      .in('id', ids);

    if (error) {
      console.log('Error al obtener contratistas:', error);
      return null;
    }

    return data;

  } catch (e) {
    console.log('Error:', e);
    return null;
  }
};

export const getContratistasPorProyecto = async (proyectoId) => {

  try {
    const { data, error } = await supabase
      .from("Proyecto_Contratista")
      .select("id_contratista, Contratistas(*)")
      .eq("id_proyecto", proyectoId)
    if (error) {
      console.log(error);
      return []
    }
    return data.map((fila) => fila.Contratistas) 
  } catch (e) {
    console.log(e)
    return []
  }

}