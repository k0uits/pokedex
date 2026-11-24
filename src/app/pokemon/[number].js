import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);

  async function charger() {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await reponse.json();
    setPokemon(data);
  }

  useEffect(() => {
    charger();
  }, [number]);

  if (!pokemon) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: pokemon.name, headerShown: true }} />
      <View style={styles.imageCard}>
        <Image
          source={{ uri: `${ARTWORK}${number}.png` }}
          style={styles.image}
        />
      </View>
      <Text style={styles.number}>#{number}</Text>
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.typeBadge}>
        <Text style={styles.typeText}>{pokemon.types[0].type.name}</Text>
      </View>
      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Taille</Text>
          <Text style={styles.detailValue}>{pokemon.height / 10} m</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Poids</Text>
          <Text style={styles.detailValue}>{pokemon.weight / 10} kg</Text>
        </View>
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
    textTransform: "capitalize",
  },
  typeBadge: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  typeText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  detailsRow: {
    flexDirection: "row",
    gap: 32,
    marginTop: 8,
  },
  detailItem: {
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});
