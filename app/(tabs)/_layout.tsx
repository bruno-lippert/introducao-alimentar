import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2E7D32", // Verde escuro
        tabBarInactiveTintColor: "#81C784", // Verde claro
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E8F5E9",
        },
      }}
    >
      {/* Aponta para o arquivo app/(tabs)/index.tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Alimentos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="food-bank" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="desengasgo"
        options={{
          title: "Desengasgo",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heartbeat" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
