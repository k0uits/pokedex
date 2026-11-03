import { View, Text, StyleSheet } from "react-native";

export default function Titre({ titre, texte }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texte}>{titre || texte}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 4,
  },
  texte: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
});
