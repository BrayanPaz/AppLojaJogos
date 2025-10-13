import { Text, View, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState} from 'react'
import styles from '../style'

export default function About() {
    const itens = [
        {Nome: 'Jogo 1', Preco: 'R$ 100,00', Cartaz: ''},
        {Nome: 'Jogo 2', Preco: 'R$ 200,00', Cartaz: ''},
        {Nome: 'Jogo 3', Preco: 'R$ 300,00', Cartaz: ''},
        {Nome: 'Jogo 4', Preco: 'R$ 400,00', Cartaz: ''},    
    ]
    const [carrinho, setCarrinho] = useState([]);
    const adicionarAoCarrinho = (index) => {
    setCarrinho((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
    return (
            <ImageBackground source={require('../assets/Fundo.png')} style={styles.catalogo}>
                <FlatList
                    data={itens}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.lista}>
                            <Text style={styles.item}>{item.Nome}</Text>
                        </View>
                    )}
                />
            </ImageBackground>
    );
}