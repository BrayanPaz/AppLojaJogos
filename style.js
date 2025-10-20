import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        alignItems: 'center', // corrigido spelling
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    },
    rodape: {
        fontSize: 12,
        position: 'absolute',
        bottom: 30,
        right: 0,
        textAlign: 'right',
        padding: 10,
        color: '#fff',
    },
    localMapa: {
        width: '80%',
        height: '80%',
    },
    localTitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',

    },
    catalogo: {
        flex: 1,
        backgroundColor: '#ffc3c300',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'space-evenly',
    },
    catalogoListaRow: {
        justifyContent: 'space-evenly', // separa colunas
    },
    catalogoLista: {
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    catalogoItem: {
        backgroundColor: '#ffffff3d',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        width: '45%',
        aspectRatio: 1
    },
    jogoNome: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    jogoPreco: {
        fontSize: 14,
        color: '#888',
    },
    catalogoItemBotao: {
        borderRadius: 8,
        marginTop: 12,
        backgroundColor: '#427cb9ff',
    },
    catalogoItemBotaoTexto: {
        color: '#fff',
        textAlign: 'center',
        padding: 12,
    },
    catalogoItemBotaoDesabilitado: {
        borderRadius: 8,
        marginTop: 12,
        backgroundColor: '#272727ff',
    },
    jogoImagem: {
        width: '100%',
        height: 100,
        marginBottom: 8,
        resizeMode: 'contain',
    },
})