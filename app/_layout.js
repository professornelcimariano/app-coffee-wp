import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010101",
          borderBottomWidth: 0, // Remove a borda
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "Coffee WP" }} />
      <Stack.Screen name="about" options={{ title: "Sobre WP" }} />
      <Stack.Screen name="about2" options={{ title: "Sobre 2 WP" }} />
      <Stack.Screen name="products" options={{ title: "Menu WP" }} />
      <Stack.Screen name="coffeesingle/[id]" options={{ title: 'Coffee WP' }} />
      <Stack.Screen name="languages" options={{ title: "Linguagens WP" }} />
      <Stack.Screen name="languagesingle/[id]" options={{ title: 'Linguagens WP' }} />
      {/* <Stack.Screen name="tabs/_layout" options={{ }} /> */}
    </Stack>
    
  );
}