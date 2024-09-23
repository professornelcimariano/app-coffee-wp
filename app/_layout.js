import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    //Essa parte é para a barra de navegação
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
      <Stack.Screen name="products" options={{ title: "Menu WP" }} />
      <Stack.Screen name="coffeesingle/[id]" options={{ title: 'Coffee WP' }} />
      <Stack.Screen name="languages" options={{ title: "Linguagens WP" }} />
      <Stack.Screen name="languagessingle/[id]" options={{ title: 'Linguagens WP' }} />
      <Stack.Screen name="frameworks" options={{title: 'Framewoks'}} />
      <Stack.Screen name="coffeeparings" options={{title: 'Framewoks'}} />
      {/* <Stack.Screen name="frameworksingle/[id]" options={{ title: 'Frameworks WP' }} /> */}
      {/* <Stack.Screen name="tabs/_layout" options={{ }} /> */}
    </Stack>
    
  );
}