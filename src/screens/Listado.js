import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text, ActivityIndicator } from 'react-native'
import { View } from 'react-native'
import { ObraInfo } from '../components/ObraInfo'
import { useNavigation } from "@react-navigation/native";
import styles from '../styles';
import { getProyectos, eliminarProyecto } from '../database/Proyectos';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";


export const Listado = () => {
    const navigation = useNavigation();
    const [listaObras, setListaObras] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();


    const obtenerObras = async () => {
        setLoading(true)
        const data = await getProyectos();
        setListaObras(data);
        setLoading(false)
    };

    const handleDelete = async (id) => {
        eliminarProyecto(id)
        obtenerObras()
    }

    useEffect(() => {
        obtenerObras();
    }, []);


    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#1B365D" />
                <Text>Cargando obras...</Text>
            </View>
        );
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listaObras}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.contratistaCard}>
                        <View style={styles.contratistaInfo}>
                            <Text style={styles.contratistaNombre}>{item.nombre}</Text>
                            <Text style={styles.contratistaDetalle}>Inicio: {item.fechaInicio}</Text>
                            <Text style={styles.contratistaDetalle}>Fin: {item.fechaFin}</Text>
                        </View>
                        <View style={styles.contratistaAcciones}>
                            <Pressable style={styles.modificarButton} onPress={() => dispatch(setSelectedObra(item))}>
                                <Text style={styles.modificarButtonText}>Modificar</Text>
                            </Pressable>
                            <Pressable style={styles.eliminarButton} onPress={() => handleDelete(item.id)}>
                                <Text style={styles.eliminarButtonText}>Eliminar</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.listEmptyText}>Aún no hay obras disponibles</Text>}
            />
            <Pressable
                style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    borderColor: "#1B365D",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f8efd8",
                    elevation: 5, // Android
                    shadowOpacity: 0.3, // iOS
                }}
                onPress={() => navigation.navigate("AltaObra")}
            >
                <Text style={{ color: "#1B365D", fontSize: 30 }}>+</Text>
            </Pressable>
        </SafeAreaView>
    )
}
