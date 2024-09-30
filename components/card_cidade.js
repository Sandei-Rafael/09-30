import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const card_cidade = (nome,uf)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text>
            <> — </>
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}

export default card_cidade;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#211d19"
    },
    cidade: {
        fontSize: 18,
        color: "#4acabb",
        fontWeight: 600
    },
    uf: {
        fontSize: 18,
        color: "#ff0048",
        fontWeight: 600
    }
  });