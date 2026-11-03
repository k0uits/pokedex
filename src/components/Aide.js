import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Aide() {
  const [isDisplayed, setDisplayed] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setDisplayed(!isDisplayed)}>
        <Text style={styles.buttonText}>
          {isDisplayed ? "Masquer l'aide" : "Afficher l'aide"}
        </Text>
      </Pressable>

      {isDisplayed && (
        <Text style={styles.content}>
          Appuyez sur Capturer pour ajouter un Pokémon à votre équipe
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#2563eb",
    fontWeight: "600",
  },
  content: {
    marginTop: 6,
    color: "#4b5563",
    textAlign: "center",
  },
});
