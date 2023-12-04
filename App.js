import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigations/NavigationTabs";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}
