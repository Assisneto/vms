import { ThemeProvider } from "@contexts/theme";
import "@config/i18n";
import { Routes } from "@routes/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "@contexts/AuthContext";
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
