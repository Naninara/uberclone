import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import HomeScreen from "./Screens/HomeScreen";
import MapScreen from "./Screens/MapScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen
              name="home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="mapscreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
