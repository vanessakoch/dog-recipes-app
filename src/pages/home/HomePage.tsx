import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomePage: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/dog-image.jpg')} style={styles.image} />
      <Text style={styles.title}>Bem-vindo ao Mundo das Receitas para Cachorros!</Text>
      <Text style={styles.subtitle}>Descubra receitas deliciosas e saudáveis para seu pet.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Comece Agora!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffecb3', // Cor de fundo mais clara e vibrante
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75, // Deixa a imagem redonda
    borderWidth: 5,
    borderColor: '#ff8c00', // Cor para destacar a borda
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff6347', // Cor vibrante para o título
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff8c00', // Cor chamativa para o botão
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5, // Efeito de sombra para dar profundidade
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;
