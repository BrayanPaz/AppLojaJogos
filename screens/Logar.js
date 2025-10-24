import { ImageBackground, Text, View, TextInput, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from '../style'

export default function About() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/Fundo.png')} style={styles.container}>
            <Text style={styles.logarTitulo}>
                Entrar
            </Text>
            <View>
                <TextInput placeholder="Email" style={styles.logarEmail} />
                <TextInput placeholder="Senha" style={styles.logarSenha} secureTextEntry />
                <Pressable onPress={() => navigation.navigate('Catalogo')} style={styles.logarBotao}>
                    <Text style={styles.logarBotaoTexto}>Confirmar</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}