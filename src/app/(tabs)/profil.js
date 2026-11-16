import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function Profil() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titre}>Profil</Text>
      <Text style={styles.nom}>Antonin</Text>
      <View style={styles.card}>
        <Image
          source={{ uri: `${ARTWORK}6.png` }}
          style={styles.image}
        />
        <Text style={styles.pokemonNom}>Dracaufeu #006</Text>
        <Text style={styles.pokemonType}>Feu</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    padding: 16,
  },
  titre: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
  },
  nom: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    width: "100%",
    maxWidth: 320,
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 16,
  },
  pokemonNom: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  pokemonType: {
    fontSize: 14,
    color: "#6b7280",
  },
});
