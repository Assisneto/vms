import { ThemeProvider } from "./src/theme";
import { Home } from "./src/screens/home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
