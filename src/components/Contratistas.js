import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, FlatList } from "react-native";
import { getContratistas } from "../database/Contratistas";

export const Contratistas = () => {
    const [contratistas, setContratistas] = useState([])

    const fetchContratistas = async () => {
        const data = await getContratistas();
        setContratistas(data)
    }

    
    
  return (
    <View style={styles.contenedor}>
      <FlatList
        data={contratistas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.nombre} {item.apellido} 
          Especialidad: {item.especialidad} Teléfono: {item.telefono}</Text>
        )}
        ListEmptyComponent={<Text>No hay contratistas</Text>}
      />
      <Button onPress={fetchContratistas} title="Obtener contratistas" />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    marginHorizontal: 20,
    marginTop: 20
  }
})
