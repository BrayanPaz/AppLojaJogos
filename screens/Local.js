import { ImageBackground, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import styles from "../style";

export default function About() {
    return (
        <ImageBackground
            source={require("../assets/Fundo.png")}
            style={styles.container}
        >
            <MapView
                region={{
                    latitude: -31.3320872,
                    longitude: -54.0718895,
                    latitudeDelta: 0.00466,
                    longitudeDelta: 0.000221,
                }}
                style={styles.localMapa}
                mapType="hybrid"
            >
                <Marker
                    coordinate={{
                        latitude: -31.3320872,
                        longitude: -54.0718895,
                    }}
                    title="Sede"
                    description="Estamos aqui"
                />
            </MapView>
        </ImageBackground>
    );
}
