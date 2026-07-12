import { supabase } from "./Index";

export const saveCosto = async (nombre, monto) => {
  let costo = {
    tipo_costo: nombre,
    monto: Number(monto),
    
  }
    try {
    const { data, error } = await supabase.from('Costo_Obra').insert([costo]).select().single();
    return data;
  } catch (e) {
    console.log('ERROR AL INGRESAR FRENTE OBRA ->', e)
    return null;
  }
}


export const getCosto = async () => {
  let resp;
  try {
      const { data } = await supabase
                    .from('Costo_Obra')
                    .select('*');
    resp = data;
    console.log(resp)
  } catch (e) {
    console.log('Error al obtener CostoObra', e)
    resp = null;
  } finally {
    return resp;
  }
}

export const deleteCosto = async (id) => {
  try {
    
    const resp = await supabase
    .from('Costo_Obra')
    .delete()
    .eq('id',id);
    console.log('SE ELIMINO CORRECTAMENTE')

  } catch (e) {
    console.log('ERROR AL ELIMINAR Costo -> ', e)
  }
}