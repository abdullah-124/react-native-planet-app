import { useFonts } from "expo-font";
import Text from "./src/components/Text/Text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Details from "./src/screens/Details"
const Stack = createNativeStackNavigator();

export default function App() {
  const [loader] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  return !loader ? (
    <Text>Font is loading</Text>
  ) : (
    <>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


