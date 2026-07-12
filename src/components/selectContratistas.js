import React, { useEffect, useState } from "react"
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native"
import styles from "../styles"
import { CardContratista } from "./CardContratista";
import { getContratistasDb } from "../database/Contratistas";
import { useDispatch, useSelector } from 'react-redux';
import { getContratistas } from "../redux/ContratistaSlice";

export const SelectContratistas = ({cerrarModal}) => {
  const dispatch = useDispatch();
  const ListContratistas = useSelector(state => state.contratistas.contratistasList);

  const fetchContratistas = async () => {
    const data = await getContratistasDb();
    dispatch(getContratistas(data));
  };
    useEffect(() => {
      fetchContratistas();
    }, [dispatch]);
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contratistas</Text>
        </View>
        <View>
            <ScrollView>
          {ListContratistas?.length > 0 ? (
            ListContratistas.map((contratista) => <CardContratista key={contratista.id} contratista={contratista} />)
          ) : (
            <Text>No hay Contratistas</Text>
          )}
          </ScrollView>
        </View>
        <Pressable style={styles.button} onPress={cerrarModal}>
            <Text>
                Cerrar
            </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
