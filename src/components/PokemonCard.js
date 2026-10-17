import { View, Text, Image, StyleSheet } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `${ARTWORK}${number}.png` }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  info: {
    marginLeft: 16,
    justifyContent: "center",
  },
  number: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "600",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginVertical: 2,
  },
  type: {
    fontSize: 14,
    color: "#4b5563",
  },
});
