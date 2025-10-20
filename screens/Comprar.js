import { ImageBackground, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../style'

export default function About() {
    return (
        <ImageBackground source={require('../assets/Fundo.png')} style={styles.container}>
        </ImageBackground>
    );
}