import { supabase } from "./Index";

// export const saveFrente = async (nombre, latitud, longitud) => {
//   let frente = {
//     nombre: nombre,
//     latitud: latitud,
//     longitud: longitud,
//   }
//     try {
//     const { data, error } = await supabase.from('Frente_Obras').insert([frente]).select().single();
//     console.log('se agrego el frente')
//     return data;
//   } catch (e) {
//     console.log('ERROR AL INGRESAR FRENTE OBRA ->', e)
//     return null;
//   }
// }
export const saveFrente = async (nombre, latitud, longitud) => {
  const frente = {
    nombre,
    latitud,
    longitud,
  };

  try {
    const { data, error } = await supabase
      .from("Frente_Obras")
      .insert([frente])
      .select()
      .single();

    console.log("data:", data);
    console.log("error:", error);

    return data;
  } catch (e) {
    console.log("ERROR AL INGRESAR FRENTE OBRA ->", e);
    return null;
  }
}


export const getFrentesId = async (ids) => {
  const { data, error } = await supabase
    .from("Frente_Obras")
    .select("*")
    .in("id", ids);

  if (error) {
    console.log(error);
    return [];
  }

  return data;
};
export const getFrente = async () => {
  let resp;
  try {
      const { data } = await supabase
                    .from('Frente_Obras')
                    .select('*');
    resp = data;
    console.log(resp)
  } catch (e) {
    console.log('Error al obtener FrenteObra', e)
    resp = null;
  } finally {
    return resp;
  }
}

export const deleteFrente = async (id) => {
  try {
    
    const resp = await supabase
    .from('Frente_Obras')
    .delete()
    .eq('id',id);
    console.log('SE ELIMINO CORRECTAMENTE')

  } catch (e) {
    console.log('ERROR AL ELIMINAR FRENTE -> ', e)
  }
}