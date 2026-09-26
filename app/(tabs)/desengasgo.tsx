import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

export default function DesengasgoScreen() {
  const callEmergency = () => {
    Linking.openURL("tel:192");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <FontAwesome name="heartbeat" size={50} color="#E53935" />
          <Text style={styles.title}>Primeiros Socorros</Text>
          <Text style={styles.subtitle}>Como agir em caso de engasgo</Text>
        </View>

        {/* Botão de Emergência */}
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={callEmergency}
          activeOpacity={0.8}
        >
          <FontAwesome
            name="phone"
            size={24}
            color="#FFF"
            style={styles.phoneIcon}
          />
          <Text style={styles.emergencyText}>Ligar para o SAMU (192)</Text>
        </TouchableOpacity>

        {/* Gag vs Engasgo */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <FontAwesome name="warning" size={24} color="#FF9800" />
            <Text style={styles.cardTitle}>Gag (Ânsia) vs Engasgo</Text>
          </View>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Reflexo de Gag:</Text> É uma defesa
            natural. O bebê fica com o rosto vermelho, tosse, faz barulho, mas
            consegue respirar. <Text style={styles.highlight}>NÃO</Text>{" "}
            interfira, apenas observe! O bebê está resolvendo sozinho.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Engasgo Real:</Text> O bebê fica
            silencioso, não tosse, não chora e começa a ficar roxo ou pálido. É
            uma emergência, aja imediatamente!
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Homem-Aranha / Manobra Heimlich (Menores de 1 ano)
        </Text>

        {[
          {
            title: "Apoie o bebê no braço",
            desc: "Coloque o bebê de bruços sobre o seu antebraço, com a cabeça ligeiramente mais baixa que o corpo. Apoie a cabeça e a mandíbula com a mão (não aperte o pescoço).",
          },
          {
            title: "5 Tapinhas nas costas",
            desc: 'Dê 5 batidas firmes com o "calcanhar" da sua mão livre entre as escápulas (costas) do bebê.',
          },
          {
            title: "Vire o bebê de frente",
            desc: "Segurando a cabeça, vire o bebê de barriga para cima, apoiando as costas dele no seu outro antebraço. Mantenha a cabeça mais baixa que o corpo.",
          },
          {
            title: "5 Compressões no peito",
            desc: "Use dois dedos no meio do peito do bebê (logo abaixo da linha dos mamilos) e faça 5 compressões rápidas.",
          },
          {
            title: "Verifique e repita",
            desc: "Repita o ciclo (5 tapas / 5 compressões) até que o objeto saia e o bebê consiga chorar, tossir forte ou respirar.",
          },
        ].map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.desc}</Text>
            </View>
          </View>
        ))}

        <View style={styles.footerSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  emergencyButton: {
    backgroundColor: "#E53935",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  phoneIcon: {
    marginRight: 10,
  },
  emergencyText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#EEE",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
    color: "#222",
  },
  highlight: {
    fontWeight: "bold",
    color: "#E53935",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginTop: 2,
  },
  stepNumberText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  stepDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: "#666",
  },
  footerSpace: {
    height: 40,
  },
});
