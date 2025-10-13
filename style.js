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
        allignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10,
    },
    rodape: {
        fontSize: 12,
        position: 'absolute',
        bottom: 30,
        right: 0,
        textAlign: 'right',
        padding: 10,
        color: '#424242ff',
    },
    mapa: {
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginVertical: 5,
    },
    lista: {
        backgroundColor: '#57a0ff84',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 30
    },
    catalogo: {
        flex: 1,
        backgroundColor: '#ffc3c300',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'space-evenly',
        rowGap: '4%',
    }
});
