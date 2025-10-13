import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Sobre from "./screens/Sobre.js"
import Catalogo from "./screens/Catalogo.js"
import Carrinho from "./screens/Carrinho.js"
import Biblioteca from "./screens/Biblioteca.js"
import Comprar from "./screens/Comprar.js"
import Local from "./screens/Local.js"

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Sobre">
                <Drawer.Screen name="Catalogo" component={Catalogo} />
                <Drawer.Screen name="Carrinho" component={Carrinho} />
                <Drawer.Screen name="Biblioteca" component={Biblioteca} />
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="Local" component={Local} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
