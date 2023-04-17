import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const images = [
//  { uri: 'https://i.pinimg.com/originals/51/c3/81/51c381cf3f020b4e2dd0f005f50daff7.gif' },
  { uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Desktop-Gif-Pictures-HD.gif' },

];

const Slide2Screen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onNextPress = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: images[currentImageIndex].uri }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to My-BoomIt</Text>
          
          <Text style={styles.subtitle}>
          Enjoy ad-free listening, personalized playlists, and access to millions of songs. 
          </Text>
          <TouchableOpacity style={styles.button} onPress={onNextPress}>
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

export default Slide2Screen;
