import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button, FlatList } from "react-native";
import { getContratistasDb } from "../database/Contratistas";
import { useDispatch, useSelector } from 'react-redux';
import { getContratistas } from "../redux/ContratistaSlice";

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

  return (
    <View>
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


