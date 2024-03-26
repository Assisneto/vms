import { ThemeProvider } from "./src/theme/theme";
import { Home } from "./src/screens/home/home";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
