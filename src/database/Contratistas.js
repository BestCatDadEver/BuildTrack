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
    
  } catch (e) {
    console.log('ERROR AL INGRESAR PERSONA ->', e)
  }

}

export const deletePersona = async () => {

  try {
    
    const resp = await supabase
    .from('contratistas')
    .delete()
    .eq('id','dd41e3ab-b8ed-4432-b5d4-cfaf7fa63200');

  } catch (e) {
    console.log('ERROR AL ELIMINAR PERSONA -> ', e)
  }
}