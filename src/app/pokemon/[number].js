import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import POKEMONS from "../../data/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const pokemon = POKEMONS.find((p) => p.number === Number(number));

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Pokémon non trouvé</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: pokemon.name, headerShown: true }} />
      <View style={styles.imageCard}>
        <Image
          source={{ uri: `${ARTWORK}${pokemon.number}.png` }}
          style={styles.image}
        />
      </View>
      <Text style={styles.number}>#{pokemon.number}</Text>
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.typeBadge}>
        <Text style={styles.typeText}>{pokemon.type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#ffffff",
  },
  imageCard: {
    width: "100%",
    height: 300,
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
  number: {
    fontSize: 16,
    color: "#6b7280",
    fontWeight: "600",
    marginBottom: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  typeBadge: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  typeText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "600",
  },
});
