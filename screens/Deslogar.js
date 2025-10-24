import { ImageBackground, Text, View, TextInput, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from '../style'

export default function About() {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../assets/Fundo.png')} style={styles.container}>
            <Text style={styles.logarTitulo}>
                Sair
            </Text>
            <View>
                <Pressable onPress={() => navigation.navigate('Logar')} style={styles.deslogarBotao}>
                    <Text style={styles.deslogarBotaoTexto}>Sair da conta</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}