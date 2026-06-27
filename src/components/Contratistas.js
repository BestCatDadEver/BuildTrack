import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { getContratistas } from "../database/Contratistas";

const Contratistas = () => {
    const [contratistas, setContratistas] = useState([])

    const fetchContratistas = async () => {
        const data = await getContratistas();
        setContratistas(data)
    }

    useEffect(() => {
        fetchContratistas();
    }, [])
    
 return (
    <View style={styles.contenedor}>
      <ScrollView>
      {
        contratistas.length > 0 ? 
          contratistas.map(c => (
             <Text key={c.id}>{c.nombre}</Text>
          ))
          :
          <Text>No hay contratistas</Text>
      }
      </ScrollView>
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

export default Contratistas;