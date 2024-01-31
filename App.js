/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { View, StyleSheet, Image, SafeAreaView, StatusBar, Text, ScrollView} from 'react-native'
//Import 'Nome da imagem' from '../assets/img/nome_da_image'.png


 function scheduling (){
  return(
    <SafeAreaView style={style.container}>
      <StatusBar></StatusBar>
      <View style={style.productContainer}>
        <Image/> {/*adicionar depois a image.png */}
      </View>
      <View >
        <Tex style={style.productText}>Corte de cabelo</Tex>
        <Text style={style.productInfo}>Voce tem 40 pontos!</Text>
      </View>


      <Text style={style.titleCategory}>Book a Slot</Text>
      <ScrollView  style={style.scrollView} horizontal>
        <View style={style.dataBox}>
         <Text>Mon</Text>
         <Text style={{fontWeight:"bold"}}>1</Text>
        </View>
        <View style={style.dataBox}>
         <Text>Mon</Text>
         <Text style={{fontWeight:"bold"}}>1</Text>
        </View>
        <View style={style.dataBox}>
         <Text>Mon</Text>
         <Text style={{fontWeight:"bold"}}>1</Text>
        </View>
        <View style={style.dataBox}>
         <Text>Mon</Text>
         <Text style={{fontWeight:"bold"}}>1</Text>
        </View>
      </ScrollView>
      <View>
        <View>
          <View style={style.timeContainer}>
            <Text>07:00 - 08:00</Text>
            <View>
              <Text style={style.freeArea}>Free</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Free</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#E8EAED',
    justifyContent:"flex-start",
    paddingHorizontal:'30',
    paddingVertical:'30',
    borderColor: "#7D8392",
    borderBottomWidth:1,
  },
  productContainer:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
  },
  productText:{
    fontWeight:'bold',
    color:"#7D8392",
    fontSize:14,
  },
  productInfo:{
    color:"#7D8392",
    fontSize:14,
  },
  scrollView:{
    height:80,
    marginTop:30,

  },
  dataBox:{
    height:73,
    width:63,
    borderColor:"#C7C8C8",
    borderWidth:1,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    marginRight:20,
  },
  titleCategory:{

  }
});


export default scheduling;
