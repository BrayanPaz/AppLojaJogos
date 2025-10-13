import { ImageBackground, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../style'

export default function About() {
    return (
        <ImageBackground source={require('../assets/Fundo.png')} style={styles.container}>
            <Text style={styles.texto}>Este é um aplicativo de venda de jogos com sede no IFSul Campus Bagé</Text>
            <Text style={styles.rodape}>Desenvolvido por Brayan do Couto Paz</Text>
        </ImageBackground>
    );
}