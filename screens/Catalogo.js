import { ImageBackground, Text, View, FlatList, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState} from 'react'
import styles from '../style'

export default function About() {
    const itens = [
        {Nome: 'Elden Ring', Descricao: 'Um RPG de ação e fantasia aclamado pela crítica, dos criadores de Dark Souls (FromSoftware) e George R.R. Martin. Explore as Terras Intermédias, um vasto mundo aberto cheio de segredos, perigos e criaturas colossais, em sua jornada para se tornar o Lorde Prístino.', Preco: 'R$ 274,50', Cartaz: require('../assets/eldenring.png')},
        {Nome: "Baldur's Gate 3", Descricao: 'Um RPG massivo baseado no universo de Dungeons & Dragons. Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo, traição e a atração pelo poder absoluto, enquanto um parasita Devorador de Mentes cresce em seu cérebro.', Preco: 'R$ 199,99', Cartaz: require('../assets/baldursgate.jpg')},
        {Nome: 'Stardew Valley', Descricao: 'Um RPG de simulação de fazenda. Você herdou a velha fazenda do seu avô no Vale do Orvalho. Armado com ferramentas de segunda mão e algumas moedas, você parte para começar sua nova vida, cultivando, criando animais e fazendo amizade com os moradores locais.', Preco: 'R$ 300,00', Cartaz: require('../assets/stardewvalley.jpg')},
        {Nome: 'Hades', Descricao: 'Desafie o deus dos mortos neste roguelike de ação em masmorras. Como Zágreu, príncipe do Submundo, você usará os poderes e armas míticas do Olimpo para se libertar das garras de seu pai, Hades, ficando mais forte a cada tentativa de fuga.', Preco: 'R$ 400,00', Cartaz: require('../assets/hades.png')},
        {Nome: 'Cyberpunk 2077', Descricao: 'Um RPG de ação e ficção científica ambientado em um mundo aberto futurista. Jogue como V, um mercenário em busca de um implante único que promete imortalidade.', Preco: 'R$ 500,00', Cartaz: require('../assets/cyberpunk2077.jpg')},
        {Nome: 'Red Dead Redemption 2', Descricao: 'Um jogo de ação e aventura em mundo aberto ambientado no final do século 19. Jogue como Arthur Morgan, um fora da lei que deve lidar com as consequências de suas escolhas em um mundo em rápida mudança.', Preco: 'R$ 600,00', Cartaz: require('../assets/reddeadredemption2.jpg')},
        {Nome: 'The Witcher 3: Wild Hunt', Descricao: 'Um RPG de ação e aventura em mundo aberto. Jogue como Geralt de Rívia, um caçador de monstros em busca de sua filha adotiva, enquanto navega por um mundo cheio de escolhas morais e consequências.', Preco: 'R$ 700,00', Cartaz: require('../assets/thewitcher3.jpg')},
        {Nome: 'Hollow Knight', Descricao: 'Um jogo de ação e aventura em um mundo subterrâneo cheio de insetos e criaturas estranhas. Explore cavernas, lute contra inimigos desafiadores e descubra os segredos de Hallownest.', Preco: 'R$ 800,00', Cartaz: require('../assets/hollowknight.jpg')},
        {Nome: 'Portal 2', Descricao: 'Um jogo de quebra-cabeça em primeira pessoa que desafia os jogadores a usar a física e a lógica para superar obstáculos. Com uma narrativa envolvente e humor inteligente, Portal 2 é uma sequência imperdível.', Preco: 'R$ 900,00', Cartaz: require('../assets/portal2.jpg')},
        {Nome: "Sid Meier's Civilization VI", Descricao: 'Um jogo de estratégia por turnos onde você lidera uma civilização desde a Idade da Pedra até a Era Moderna. Construa cidades, desenvolva tecnologia e conquiste seus inimigos.', Preco: 'R$ 1000,00', Cartaz: require('../assets/sidmeierscivilizationVI.jpg')},
        {Nome: 'God of War (2018)', Descricao: 'Um jogo de ação e aventura que reinventa a franquia God of War. Jogue como Kratos, que agora vive em um mundo baseado na mitologia nórdica, enquanto tenta proteger seu filho Atreus.', Preco: 'R$ 1100,00', Cartaz: require('../assets/godofwar2018.png')},
        {Nome: 'Lethal Company', Descricao: 'Um jogo de terror e sobrevivência onde você e seus amigos devem explorar uma casa assombrada e completar objetivos enquanto evitam serem capturados por uma entidade sobrenatural.', Preco: 'R$ 1200,00', Cartaz: require('../assets/lethalcompany.jpg')},
    ]
    const [carrinho, setCarrinho] = useState([]);
    const adicionarAoCarrinho = (index) => {
      setCarrinho((prev) =>
        prev.includes(index)
          ? prev
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
                            <Image source={item.Cartaz} style={styles.jogoImagem} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.jogoNome}>{item.Nome}</Text>
                                <Text style={styles.jogoPreco}>{item.Preco}</Text>
                                {/* Condicional: se já tem no carrinho mostra texto, senão mostra botão */}
                                {carrinho.includes(index) ? (
                                    <Pressable style={styles.catalogoItemBotaoDesabilitado} disabled={true}>
                                        <Text style={styles.catalogoItemBotaoTexto}>Item no carrinho</Text>
                                    </Pressable>
                                ) : (
                                    <Pressable style={styles.catalogoItemBotao} onPress={() => adicionarAoCarrinho(index)}>
                                        <Text style={styles.catalogoItemBotaoTexto}>Adicionar ao carrinho</Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>
                    )}
                />
            </ImageBackground>
    );
}