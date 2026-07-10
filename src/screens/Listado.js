import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { ObraInfo } from '../components/ObraInfo'
import { useNavigation } from "@react-navigation/native";
import styles from '../styles';


export const Listado = () => {
    const navigation = useNavigation();
    const [listaObras,setListaObras] = useState('')


  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>
                {listaObras?.length>0 ?(
                    listaObras.map((obra)=> <ObraInfo key={obra.id} obra={obra}/>
                )):(<Text>Aun no hay obras que mostrar</Text>)}
            </View>
        </ScrollView>
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
