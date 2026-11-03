import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Titre from "../components/Titre";
import PokemonCard from "../components/PokemonCard";
import Aide from "../components/Aide";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  const [onlyFire, setOnlyFire] = useState(false);

  const pokemonsAffiches = onlyFire
    ? POKEMONS.filter((pokemon) => pokemon.type === "Feu")
    : POKEMONS;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Titre titre="Mon Pokédex" />
        <Text style={styles.count}>{POKEMONS.length} Pokémon</Text>

        <Aide />

        <View style={styles.filterContainer}>
          <Pressable
            style={styles.filterButton}
            onPress={() => setOnlyFire(!onlyFire)}
          >
            <Text style={styles.filterButtonText}>
              {onlyFire ? "Tout afficher" : "Seulement le type Feu"}
            </Text>
          </Pressable>
        </View>

        {pokemonsAffiches.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            number={pokemon.number}
            name={pokemon.name}
            type={pokemon.type}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  scroll: {
    paddingBottom: 24,
  },
  count: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 12,
  },
  filterContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: "#111827",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  filterButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
