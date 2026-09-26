import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Tela de detalhes do alimento */}
      <Stack.Screen
        name="alimento/[id]"
        options={{ 
          title: "Detalhes do Alimento", 
          headerShown: true,
          headerStyle: { backgroundColor: "#4CAF50" },
          headerTintColor: "#FFF",
        }}
      />
    </Stack>
  );
}
