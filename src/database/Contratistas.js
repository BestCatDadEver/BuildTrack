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
    .eq('id',id);
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
    return data ? data[0] : null;
  } catch (e) {
    console.log('Error al actualizar datos -> ', e)
    return null;
  }
}