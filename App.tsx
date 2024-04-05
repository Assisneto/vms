import { ThemeProvider } from "./src/theme";
import "./src/config/i18n";
import { Routes } from "./src/routes";
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
