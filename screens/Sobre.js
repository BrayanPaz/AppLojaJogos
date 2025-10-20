import { ImageBackground, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../style'

export default function About() {
    return (
        <ImageBackground source={require('../assets/Fundo.png')} style={styles.container}>
            <Text style={styles.texto}>Este é um aplicativo de venda de jogos com sede no IFSul Campus Bagé
                Os jogos são selecionados no catálogo e vão para o carrinho, onde podem ser comprados e, consequentemente, armazenados na biblioteca do usuário ou simplesmente removidos do carrinho.
            </Text>
        </ImageBackground>
    );
}