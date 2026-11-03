import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({
  number,
  name,
  type,
  captured,
  onCapture,
}) {
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
        onPress={onCapture}
      >
        <Text
          style={[styles.buttonText, captured && styles.buttonTextCaptured]}
        >
          {captured ? "Capturé" : "Capturer"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
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
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  info: {
    alignItems: "center",
    marginVertical: 8,
  },
  number: {
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "600",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginVertical: 2,
    textAlign: "center",
  },
  type: {
    fontSize: 13,
    color: "#4b5563",
  },
  button: {
    width: "100%",
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#2563eb",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  buttonCaptured: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  buttonText: {
    color: "#2563eb",
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
  buttonTextCaptured: {
    color: "#ffffff",
  },
});
