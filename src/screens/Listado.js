import React, { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { ObraInfo } from '../components/ObraInfo'
import { useNavigation } from "@react-navigation/native";


export const Listado = () => {
    const navigation = useNavigation();
    const [listaObras,setListaObras] = useState('')


  return (
    <SafeAreaView style={{flex:1}}>
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
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#007AFF",
                    elevation: 5, // Android
                    shadowOpacity: 0.3, // iOS
                }}
                onPress={() => navigation.navigate("AltaObra")}
            >
                <Text style={{ color: "white", fontSize: 30 }}>+</Text>
            </Pressable>
    </SafeAreaView>
  )
}
