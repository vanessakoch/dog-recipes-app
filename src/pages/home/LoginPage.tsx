import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { API_URL } from '@env';
import { encode } from 'base-64';
import axios from 'axios';

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const auth = 'Basic ' + encode(`${email}:${password}`);

    try {
      setLoading(true);

      const response = await axios.post(`${API_URL}/login`, {
        username: email,
        password: password,
      }, {
        headers: {
          'Authorization': auth,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Login realizado!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas');
      }
    } catch (error: any) {
      Alert.alert('Erro', error || 'Erro ao conectar à API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={handleLogin} color="#34CB79" disabled={loading} />
      <Text style={styles.link} onPress={() => Alert.alert('Aviso', 'Função de recuperação de senha ainda não implementada.')}>
        Esqueceu sua senha?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#34CB79',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: '#34CB79',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default LoginPage;
