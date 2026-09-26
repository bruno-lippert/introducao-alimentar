import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { data } from "../../data/alimentos";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AlimentoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const alimento = data.find((item) => item.id === id);

  if (!alimento) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFoundText}>Alimento não encontrado.</Text>
      </View>
    );
  }

  // Cor única, priorizando o verde e branco do tema principal do app
  const color = "#4CAF50";
  const darkColor = "#2E7D32";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Ícone no topo */}
      {/* <View style={[styles.headerIconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons name={alimento.icone as any} size={70} color="#FFF" />
      </View> */}

      {/* Nome e Badge de Categoria */}
      <Text style={styles.title}>{alimento.nome}</Text>
      <View style={[styles.badge, { backgroundColor: "#E8F5E9" }]}>
        <Text style={[styles.badgeText, { color: darkColor }]}>
          {alimento.categoria}
        </Text>
      </View>

      {/* Card da Descrição */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Como Oferecer</Text>
        <Text style={styles.description}>{alimento.descricao}</Text>
      </View>

      {/* Seção das Imagens */}
      <View style={styles.imageContainer}>
        <Text style={[styles.sectionTitle]}>Cortes Seguros e Dicas</Text>
        <ScrollView contentContainerStyle={styles.imageScroll}>
          {alimento.imagens.map((img, index) => (
            <Image
              key={index}
              source={typeof img === "string" ? { uri: img } : img}
              style={styles.foodImage}
              resizeMode="contain"
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 18,
    color: "#888",
  },
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  headerIconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 30,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 24,
    borderRadius: 16,
    marginBottom: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
  imageScroll: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  foodImage: {
    width: 300,
    height: 300,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  imageText: {
    marginTop: 10,
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    fontWeight: "500",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
