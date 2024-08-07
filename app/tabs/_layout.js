import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Desativa o cabeçalho padrão
        tabBarStyle: { 
          backgroundColor: '#fff', // Cor do fundo da barra de abas (opcional)
        },
        tabBarIconStyle: { // Adiciona uma estilização para os ícones
          color: '#000', // Cor dos ícones (opcional)
        },
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: "Settings", 
          tabBarIcon: ({ color, size }) => <Icon name="cog" size={size} color={color} /> 
        }} 
      />
    </Tabs>
  );
}
