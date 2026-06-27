import { supabase } from "./Index"; 

export const getContratistas = async () => {
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