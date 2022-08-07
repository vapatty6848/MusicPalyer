import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { AntDesign, Feather,  Ionicons  } from '@expo/vector-icons';
import React from 'react';
import musics from '../MockExemplo/dataMock';

const { width, height } = Dimensions.get('window');
export default function MusicPlayer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPrincipal}>      
        <View style={styles.WrapperImage}>
          <Image 
            source={require('../Assets/images/QueenII.jpeg')}
            style={styles.ImageEdit}
          />
        </View>  
        <View>
           <Text style={styles.title} >Titulo da Música</Text>
           <Text style={styles.artista} >Artista</Text>
        </View> 
        <View>
          <Slider
              style={styles.progressBar}
              value={10}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor='#442fb0'
              minimumTrackTintColor='#4e4e5c'
              maximumTrackTintColor='#FFFFFF'
              onSlidingComplete={() => {}}
          />
          <View style={styles.progressBarBoxTxt}>
             <Text style={styles.progressOnOffTxt}>0:00</Text>
             <Text style={styles.progressOnOffTxt}>4:00</Text>
          </View>
        </View>
        <View style={styles.Controlls}>
         <TouchableOpacity>
            <Ionicons name="play-forward-outline" size={35} color='#442fb0' style={styles.button}/>
         </TouchableOpacity>
         <TouchableOpacity>
           <Ionicons name="pause-circle-outline" size={70} color='#442fb0'/>
         </TouchableOpacity>
         <TouchableOpacity>
            <Ionicons name="ios-play-back-outline" size={35} color='#442fb0' style={styles.button} />
         </TouchableOpacity>
      </View>
      </View>
      <View style={styles.BottonContainer}>
        <View style={styles.BottonControl}>
          <TouchableOpacity onPress={() => {} }>
            <AntDesign name="heart" size={30} color='#f0b7b7' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {} }>
            <AntDesign name="heart" size={30} color='#f0b7b7' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {} }>
            <Feather name="repeat" size={30} color='#f0b7b7' />           
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {} }>
            <Ionicons name="ios-ellipsis-horizontal-outline" size={30} color='#f0b7b7' />          
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {} }>         
            <Ionicons name="md-share-outline" size={30} color='#f0b7b7'/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e16bba',
  },

  containerPrincipal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  BottonControl: {
    flexDirection:'row',
    justifyContent:'space-between',
    width: '80%'
  },

  BottonContainer: {
    borderColor:'#e69797',
    borderTopWidth:1,
    width:width,
    alignItems: 'center',
    paddingVertical: 15,
   },

  WrapperImage: {
    width: 300,
    height: 300,
    marginBottom: 25,
    backgroundColor:'black',
    shadowColor:'#16161d',
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.9,
    elevation: 5,
  },

  ImageEdit: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  title: {
   fontSize: 48,
   fontWeight: 'bold',
   textAlign: 'center', 
   color: '#ce0d8b', 
  },

  artista: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#781741',
  },

  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },

  progressOnOffTxt: {
     color: '#781741',
  },

  progressBarBoxTxt: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Controlls: {
   flexDirection: 'row',
   width: '60%',
   justifyContent: 'space-between',
   marginTop: 20,
  },

  button: {
   marginTop: 20,
  }
});