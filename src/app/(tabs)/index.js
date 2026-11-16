import { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import POKEMONS from "../../data/pokemons";
import PokemonCard from "../../components/PokemonCard";
import Titre from "../../components/Titre";
import Aide from "../../components/Aide";

export default function Index() {
  const router = useRouter();
  const [captured, setCaptured] = useState([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  function toggleCapture(number) {
    setCaptured((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number]
    );
  }

  const visibles = capturesSeulement
    ? POKEMONS.filter((p) => captured.includes(p.number))
    : POKEMONS;

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
              {POKEMONS.length} Pokémon · {captured.length} capturés
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
