import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type }) {
  const [captured, setCaptured] = useState(false);

  return (
    <View style={[styles.card, captured && styles.cardCaptured]}>
      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
      <Pressable
        style={[styles.button, captured && styles.buttonCaptured]}
        onPress={() => setCaptured(!captured)}
      >
        <Text
          style={[styles.buttonText, captured && styles.buttonTextCaptured]}
        >
          {captured ? "Capturé ✓" : "Capturer"}
        </Text>
      </Pressable>
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
    borderWidth: 2,
    borderColor: "transparent",
  },
  cardCaptured: {
    borderColor: "#2563eb",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  info: {
    marginLeft: 16,
    flex: 1,
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
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#2563eb",
    backgroundColor: "#ffffff",
  },
  buttonCaptured: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  buttonText: {
    color: "#2563eb",
    fontWeight: "600",
    fontSize: 14,
  },
  buttonTextCaptured: {
    color: "#ffffff",
  },
});
