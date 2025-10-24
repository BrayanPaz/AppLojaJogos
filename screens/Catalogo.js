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
            Nome: "Elden Ring",
            Descricao:
                "Um RPG de ação e fantasia aclamado pela crítica, dos criadores de Dark Souls (FromSoftware) e George R.R. Martin. Explore as Terras Intermédias, um vasto mundo aberto cheio de segredos, perigos e criaturas colossais, em sua jornada para se tornar o Lorde Prístino.",
            Preco: 274.50,
            Cartaz: require("../assets/eldenring.png"),
        },
        {
            Nome: "Baldur's Gate 3",
            Descricao:
                "Um RPG massivo baseado no universo de Dungeons & Dragons. Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo, traição e a atração pelo poder.",
            Preco: 199.99,
            Cartaz: require("../assets/baldursgate.jpg"),
        },
        {
            Nome: "Stardew Valley",
            Descricao:
                "Um RPG de simulação de fazenda. Você herdou a velha fazenda do seu avô no Vale do Orvalho. Armado com ferramentas de segunda mão e algumas moedas, você parte para começar sua nova vida, cultivando, criando animais e fazendo amizade com os moradores locais.",
            Preco: 14.99,
            Cartaz: require("../assets/stardewvalley.jpg"),
        },
        {
            Nome: "Hades",
            Descricao:
                "Desafie o deus dos mortos neste roguelike de ação em masmorras. Como Zágreu, príncipe do Submundo, você usará os poderes e armas míticas do Olimpo para se libertar das garras de seu pai, Hades, ficando mais forte a cada tentativa de fuga.",
            Preco: 109.90,
            Cartaz: require("../assets/hades.png"),
        },
        {
            Nome: "Cyberpunk 2077",
            Descricao:
                "Um RPG de ação e ficção científica ambientado em um mundo aberto futurista. Jogue como V, um mercenário em busca de um implante único que promete imortalidade.",
            Preco: 59.99,
            Cartaz: require("../assets/cyberpunk2077.jpg"),
        },
        {
            Nome: "Red Dead Redemption 2",
            Descricao:
                "Um jogo de ação e aventura em mundo aberto ambientado no final do século 19. Jogue como Arthur Morgan, um fora da lei que deve lidar com as consequências de suas escolhas em um mundo em rápida mudança.",
            Preco: 74.97,
            Cartaz: require("../assets/reddeadredemption2.jpg"),
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
        },
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
                                {carrinho.includes(index) ? (
                                    <Pressable style={styles.catalogoItemBotaoRemocao} onPress={() => adicionarAoCarrinho(index)} >
                                        <Text style={styles.catalogoItemBotaoTexto}>
                                            Remover do carrinho
                                        </Text>
                                    </Pressable>
                                ) : comprado.includes(item.Nome) ? (
                                    <Pressable style={styles.catalogoItemBotaoDesabilitado} disabled={true} >
                                        <Text style={styles.catalogoItemBotaoTexto}>
                                            Já comprado
                                        </Text>
                                    </Pressable>
                                ) : (
                                    <Pressable style={styles.catalogoItemBotao} onPress={() => adicionarAoCarrinho(index)} >
                                        <Text style={styles.catalogoItemBotaoTexto}>
                                            Adicionar ao carrinho
                                        </Text>
                                    </Pressable>
                                )}
                            </Modal>
                        </View>
                    </Pressable>
                )}
            />
        </ImageBackground>
    )
}
