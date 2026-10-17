import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Titre from "../components/Titre";
import PokemonCard from "../components/PokemonCard";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Titre titre="Mon Pokédex" />
        <Text style={styles.count}>{POKEMONS.length} Pokémon</Text>
        {POKEMONS.map((pokemon) => (
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
});
