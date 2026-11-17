import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PokemonCard from "../../components/PokemonCard";
import Titre from "../../components/Titre";
import Aide from "../../components/Aide";

const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

export default function Index() {
  const router = useRouter();
  const [pokemons, setPokemons] = useState(null);
  const [captured, setCaptured] = useState([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  async function charger() {
    const reponse = await fetch(API);
    const data = await reponse.json();
    const liste = data.results.map((p, i) => ({ number: i + 1, name: p.name }));
    setPokemons(liste);
  }

  useEffect(() => {
    charger();
  }, []);

  function toggleCapture(number) {
    setCaptured((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number],
    );
  }

  if (!pokemons) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  const visibles = capturesSeulement
    ? pokemons.filter((p) => captured.includes(p.number))
    : pokemons;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={visibles}
        extraData={captured}
        keyExtractor={(item) => String(item.number)}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Titre titre="Mon Pokédex" />
            <Text style={styles.count}>
              {pokemons.length} Pokémon · {captured.length} capturés
            </Text>
            <Aide />
            <Pressable
              style={styles.filterButton}
              onPress={() => setCapturesSeulement(!capturesSeulement)}
            >
              <Text style={styles.filterButtonText}>
                {capturesSeulement ? "Tout afficher" : "Mes captures"}
              </Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable
            style={{ flex: 1 }}
            onPress={() => router.push(`/pokemon/${item.number}`)}
          >
            <PokemonCard
              number={item.number}
              name={item.name}
              type={item.type}
              captured={captured.includes(item.number)}
              onCapture={() => toggleCapture(item.number)}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  listContent: {
    padding: 16,
    gap: 12,
  },
  row: {
    gap: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  count: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 8,
  },
  filterButton: {
    backgroundColor: "#111827",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
  },
  filterButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
