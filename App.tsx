import { StatusBar } from 'react-native';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { Routes } from './src/routes';
import { AuthContexProvider } from '@contexts/AuthContext';

export default function App() {
  const [fontLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <>
      <StatusBar
        barStyle={"default"}
        backgroundColor={"transparent"}
        translucent
      />
      <AuthContexProvider>
        <Routes />
      </AuthContexProvider>
    </>
  );
}
