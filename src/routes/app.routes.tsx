import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";
import { Login } from "@screens/login";
import { routesName } from "@utils/routesName";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={routesName.LOGIN} component={Login} />
      <Screen name={routesName.HOME} component={Home} />
    </Navigator>
  );
}
