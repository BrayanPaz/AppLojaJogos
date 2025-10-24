import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Sobre from "./screens/Sobre.js";
import Catalogo from "./screens/Catalogo.js";
import Carrinho from "./screens/Carrinho.js";
import Biblioteca from "./screens/Biblioteca.js";
import Local from "./screens/Local.js";
import Logar from "./screens/Logar.js";
import Deslogar from "./screens/Deslogar.js";
import { FontAwesome6 }  from '@react-native-vector-icons/fontawesome6';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Logar"
                screenOptions={{
                    headerStyle: { backgroundColor: "#4099afff" },
                    headerTintColor: "#fff",
                    drawerActiveBackgroundColor: "#2e2b36ff",
                    drawerActiveTintColor: "#ffffffff",
                    drawerInactiveTintColor: "#000",
                    drawerStyle: { backgroundColor: "#4099afff" },
                }}
            >
                <Drawer.Screen name="Catalogo" component={Catalogo} 
                    options={{ 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="store" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
                <Drawer.Screen name="Carrinho" component={Carrinho} 
                    options={{ 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="cart-shopping" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
                <Drawer.Screen name="Biblioteca" component={Biblioteca} 
                    options={{ 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="book" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
                <Drawer.Screen name="Sobre" component={Sobre}
                    options={{ 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="circle-info" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
                <Drawer.Screen name="Local" component={Local}
                    options={{ 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="location-dot" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
                <Drawer.Screen name="Logar" component={Logar}
                    options={{ 
                        headerShown: false, 
                        drawerItemStyle: { display: 'none' }, 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="right-to-bracket" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
                <Drawer.Screen name="Deslogar" component={Deslogar} 
                    options={{ 
                        drawerIcon: ({ focused }) => (
                            <FontAwesome6 name="right-from-bracket" size={24} iconStyle="solid" color={focused ? "#fff" : "#000"} />
                        )
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
