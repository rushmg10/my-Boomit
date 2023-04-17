import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
  { uri: 'https://cdn.wallpapersafari.com/88/75/QKFd98.gif' },
// { uri: 'https://i.pinimg.com/originals/e8/43/f5/e843f5e4507d83ef51df7fb27b4d0bb2.gif' },

];

const Slide1Screen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onNextPress = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: images[currentImageIndex].uri }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to My-BoomIt</Text>
          
          <Text style={styles.subtitle}>
          Discover and stream your favorite music with our app - available on Web, iOS and Android. 
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Slide2')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Slide1Screen;
