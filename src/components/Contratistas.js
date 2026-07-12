import React, { useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { getContratistasDb, deleteContratistaDb } from "../database/Contratistas";
import { useDispatch, useSelector } from 'react-redux';
import { getContratistas, setSelectedContratista, deleteContratista } from "../redux/ContratistaSlice";
import styles from "../styles";

export const Contratistas = () => {
  const dispatch = useDispatch();
  const contratistas = useSelector(state => state.contratistas.contratistasList);

  const fetchContratistas = async () => {
    const data = await getContratistasDb();
    dispatch(getContratistas(data));
  };

  useEffect(() => {
    fetchContratistas();
  }, [dispatch]);

  const handleDelete = async (id) => {
    await deleteContratistaDb(id);
    dispatch(deleteContratista(id));
  };

  return (
    <View>
      <FlatList
        data={contratistas}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.contratistaCard}>
            <View style={styles.contratistaInfo}>
              <Text style={styles.contratistaNombre}>{item.nombre} {item.apellido}</Text>
              <Text style={styles.contratistaDetalle}>Especialidad: {item.especialidad}</Text>
              <Text style={styles.contratistaDetalle}>Teléfono: {item.telefono}</Text>
            </View>
            <View style={styles.contratistaAcciones}>
              <Pressable style={styles.modificarButton} onPress={() => dispatch(setSelectedContratista(item))}>
                <Text style={styles.modificarButtonText}>Modificar</Text>
              </Pressable>
              <Pressable style={styles.eliminarButton} onPress={() => handleDelete(item.id)}>
                <Text style={styles.eliminarButtonText}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.listEmptyText}>No hay contratistas</Text>}
      />
      <Pressable style={styles.button} onPress={fetchContratistas}>
        <Text style={styles.buttonText}>Obtener contratistas</Text>
      </Pressable>
    </View>
  );
};
