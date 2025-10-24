import {
    ImageBackground,
    Text,
    View,
    FlatList,
    Pressable,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import styles from "../style";
import Modal from "react-native-modal";

export default function About() {
    const itens = [
        {
            Nome: "Portal 2",
            Descricao:
                "Um jogo de quebra-cabeça em primeira pessoa que desafia os jogadores a usar a física e a lógica para superar obstáculos. Com uma narrativa envolvente e humor inteligente, Portal 2 é uma sequência imperdível.",
            Preco: 9.99,
            Cartaz: require("../assets/portal2.jpg"),
        },
        {
            Nome: "Sid Meier's Civilization VI",
            Descricao:
                "Um jogo de estratégia por turnos onde você lidera uma civilização desde a Idade da Pedra até a Era Moderna. Construa cidades, desenvolva tecnologia e conquiste seus inimigos.",
            Preco: 129.00,
            Cartaz: require("../assets/sidmeierscivilizationVI.jpg"),
        },
        {
            Nome: "God of War (2018)",
            Descricao:
                "Um jogo de ação e aventura que reinventa a franquia God of War. Jogue como Kratos, que agora vive em um mundo baseado na mitologia nórdica, enquanto tenta proteger seu filho Atreus.",
            Preco: 114.90,
            Cartaz: require("../assets/godofwar2018.png"),
        },
        {
            Nome: "Lethal Company",
            Descricao:
                "Um jogo de terror e sobrevivência onde você e seus amigos devem explorar uma casa assombrada e completar objetivos enquanto evitam serem capturados por uma entidade sobrenatural.",
            Preco: 9.99,
            Cartaz: require("../assets/lethalcompany.jpg"),
        },
    ]
    const [carrinho, setCarrinho] = useState([])
    const adicionarAoCarrinho = (index) => {
        setCarrinho((prev) => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]))
    }
    const comprado = [ "Lethal Company", "God of War (2018)", "Sid Meier's Civilization VI", "Portal 2"]
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [visivel, setVisivel] = useState(false)
    return (
        <ImageBackground
            source={require("../assets/Fundo.png")}
            style={styles.catalogo}
        >
            <FlatList
                data={itens}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.catalogoListaRow}
                contentContainerStyle={styles.catalogoLista}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => { setSelectedIndex(index); setVisivel(true); }} style={styles.catalogoItem}>
                        <Image source={item.Cartaz} style={styles.jogoImagem} />
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={styles.jogoNome}>{item.Nome}</Text>
                            <Text style={styles.jogoPreco}>R$ {item.Preco.toFixed(2).replace('.', ',')}</Text>
                            <Modal
                                isVisible={visivel && selectedIndex === index} // só mostra para o item selecionado
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
                                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#ffffffff" }} >
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
                                <Pressable style={styles.catalogoItemBotaoDesabilitado} disabled={true} >
                                    <Text style={styles.catalogoItemBotaoTexto}>
                                        Já comprado
                                    </Text>
                                </Pressable>
                            </Modal>
                        </View>
                    </Pressable>
                )}
            />
        </ImageBackground>
    )
}
