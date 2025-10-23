import { ImageBackground, Text, View, FlatList, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import styles from '../style'

export default function About() {
    const itens = [
        {Nome: 'Jogo 1', Preco: 'R$ 100,00', Cartaz: ''},
        {Nome: 'Jogo 2', Preco: 'R$ 200,00', Cartaz: ''},
        {Nome: 'Jogo 3', Preco: 'R$ 300,00', Cartaz: ''},
        {Nome: 'Jogo 4', Preco: 'R$ 400,00', Cartaz: ''},    
    ]
    const [carrinho, setCarrinho] = useState([]);
    const retirarDoCarrinho = (index) => {
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
                numColumns={2}
                columnWrapperStyle={styles.catalogoListaRow}
                contentContainerStyle={styles.catalogoLista}
                renderItem={({ item, index }) => (
                    <View style={styles.catalogoItem}>
                        <Image source={{ uri: item.Cartaz }} style={styles.catalogoItemImagem} />
                        <Text style={styles.catalogoItemNome}>{item.Nome}</Text>
                        <Text style={styles.catalogoItemPreco}>{item.Preco}</Text>
                        <Pressable style={styles.catalogoItemBotao} onPress={() => retirarDoCarrinho(index)}>
                            <Text style={styles.catalogoItemBotaoTexto}>Retirar do Carrinho</Text>
                        </Pressable>
                    </View>
                )}
            />
        </ImageBackground>
    )
}