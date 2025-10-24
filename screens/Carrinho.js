import { ImageBackground, Text, View, FlatList, Pressable, Image} from "react-native";
import { useState } from "react";
import styles from "../style";
import Modal from "react-native-modal";
export default function About() {
    const itens = [
        {
            Nome: "Elden Ring",
            Descricao:
                "Um RPG de ação e fantasia aclamado pela crítica, dos criadores de Dark Souls (FromSoftware) e George R.R. Martin. Explore as Terras Intermédias, um vasto mundo aberto cheio de segredos, perigos e criaturas colossais, em sua jornada para se tornar o Lorde Prístino.",
            Preco: 274.50,
            Cartaz: require("../assets/eldenring.png"),
        },
        {
            Nome: "Cyberpunk 2077",
            Descricao:
                "Um RPG de ação e ficção científica ambientado em um mundo aberto futurista. Jogue como V, um mercenário em busca de um implante único que promete imortalidade.",
            Preco: 59.99,
            Cartaz: require("../assets/cyberpunk2077.jpg"),
        },
        {
            Nome: "The Witcher 3: Wild Hunt",
            Descricao:
                "Um RPG de ação e aventura em mundo aberto. Jogue como Geralt de Rívia, um caçador de monstros em busca de sua filha adotiva, enquanto navega por um mundo cheio de escolhas morais e consequências.",
            Preco: 62.97,
            Cartaz: require("../assets/thewitcher3.jpg"),
        },
        {
            Nome: "Hollow Knight",
            Descricao:
                "Um jogo de ação e aventura em um mundo subterrâneo cheio de insetos e criaturas estranhas. Explore cavernas, lute contra inimigos desafiadores e descubra os segredos de Hallownest.",
            Preco: 14.99,
            Cartaz: require("../assets/hollowknight.jpg"),
        }
    ]
    const [carrinho, setCarrinho] = useState([0, 1, 2, 3])
    const adicionarAoCarrinho = (index) => {
        setCarrinho((prev) => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]))
    }
    const comprado = [ "Lethal Company", "God of War (2018)", "Sid Meier's Civilization VI", "Portal 2"]
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [visivel, setVisivel] = useState(false)
    const [visivel2, setVisivel2] = useState(false)
    const pagar = carrinho.reduce((sum, idx) => sum + (itens[idx]?.Preco || 0), 0)  
    return (
        <ImageBackground
            source={require("../assets/Fundo.png")}
            style={styles.catalogo}
        >
            <FlatList
                data={carrinho} // agora renderiza apenas os índices que estão no carrinho
                keyExtractor={(idx) => idx.toString()}
                numColumns={2}
                columnWrapperStyle={styles.catalogoListaRow}
                contentContainerStyle={styles.catalogoLista}
                renderItem={({ item: originalIndex }) => {
                    const item = itens[originalIndex]
                    return (
                        <Pressable onPress={() => { setSelectedIndex(originalIndex); setVisivel(true); }} style={styles.catalogoItem}>
                            <Image source={item.Cartaz} style={styles.jogoImagem} />
                            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                <Text style={styles.jogoNome}>{item.Nome}</Text>
                                <Text style={styles.jogoPreco}>R$ {item.Preco.toFixed(2).replace('.', ',')}</Text>
                                <Modal
                                    isVisible={visivel && selectedIndex === originalIndex} // só mostra para o item selecionado
                                    animationIn={"bounceIn"}
                                    animationInTiming={500}
                                    animationOut={"slideOutRight"}
                                    backdropOpacity={0.5}
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#33333ac9",
                                        width: "90%",
                                        marginTop: "60%",
                                        marginBottom: "60%",
                                        borderRadius: 20,
                                        borderColor: "#333333",
                                    }}
                                >
                                    <Pressable onPress={() => { setVisivel(false); }} style={{ position: "absolute", top: 12, right: 12, zIndex: 10, padding: 6 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 20 }} >
                                            x
                                        </Text>
                                    </Pressable>
                                    <Image source={item.Cartaz} style={{ width: 150, height: 200, marginBottom: 20 }} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#ffffffff"  }} >
                                        {item.Nome}
                                    </Text>
                                    <Text style={{ fontSize: 14, marginBottom: 20, paddingHorizontal: 10, color: "#ffffffff", textAlign: "center" }} >
                                        {item.Descricao}
                                    </Text>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 20, color: "#ffffffff" }} >
                                        R$ {item.Preco.toFixed(2).replace('.', ',')}
                                    </Text>
                                    <Pressable style={styles.catalogoItemBotaoRemocao} onPress={() => { adicionarAoCarrinho(originalIndex); setVisivel(false); }} >
                                         <Text style={styles.catalogoItemBotaoTexto}>
                                             Remover do carrinho
                                         </Text>
                                     </Pressable>
                                 </Modal>
                             </View>
                        </Pressable>
                    )
                }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#ffffffff", position: "absolute", bottom: 110}} >
                Total: R$ {pagar.toFixed(2).replace('.', ',')}
            </Text>
            <Pressable style={styles.botaoPagar} onPress={() => {setVisivel2(true)}} >
                <Text style={styles.catalogoItemBotaoTexto}>
                    Pagar
                </Text>
            </Pressable>
            <Modal
                isVisible={visivel2} // só mostra para o item selecionado
                animationIn={"bounceIn"}
                animationInTiming={500}
                animationOut={"slideOutRight"}
                backdropOpacity={0.5}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#33333ac9",
                    width: "90%",
                    marginTop: "60%",
                    marginBottom: "60%",
                    borderRadius: 20,
                    borderColor: "#333333",
                }}
            >
                <Pressable onPress={() => { {setVisivel2(false); setCarrinho([])} }} style={{ position: "absolute", top: 12, right: 12, zIndex: 10, padding: 6 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#ffffffff" }} >
                        x
                    </Text>
                </Pressable>
                <Text style={{ fontSize: 16, marginBottom: 20, paddingHorizontal: 10, color: "#ffffffff", textAlign: "center" }} >
                    Valor pago: R$ {pagar.toFixed(2).replace('.', ',')}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: "#ffffffff"  }} >
                    Pagamento realizado com sucesso!
                </Text>
            </Modal>
        </ImageBackground>
    )
}
