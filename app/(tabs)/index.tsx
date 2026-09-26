import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../../data/alimentos";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IndexScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.nome.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderCard = ({ item }: { item: (typeof data)[0] }) => (
    <TouchableOpacity
      style={styles.card}
      // Navega para a tela de detalhes passando o ID na URL
      onPress={() => router.push(`/alimento/${item.id}`)}
    >
      {/* <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item.icone as any} size={30} color="#2E7D32" />
      </View> */}
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <MaterialCommunityIcons name="chevron-right" size={16} color="#A5D6A7" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color="#81C784"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar alimento..."
          placeholderTextColor="#A5D6A7"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8E9", // Fundo verde beeem clarinho
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 12,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#2E7D32",
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
  card: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    // Sombra para Android e iOS
    elevation: 2,
    shadowColor: "#000",
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#E8F5E9",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    color: "#2E7D32",
    fontWeight: "bold",
  },
});
