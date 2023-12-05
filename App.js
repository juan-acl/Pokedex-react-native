import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigations/NavigationTabs";
import { AuthProvider } from "./src/context";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <NavigationTab />
      </AuthProvider>
    </NavigationContainer>
  );
}
