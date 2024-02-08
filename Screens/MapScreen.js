import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import Map from "../Components/Map";
import RideOptions from "../Components/RideOptions";
import DestinationOptions from "../Components/DestinationOptions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="destinationCard"
            component={DestinationOptions}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="rideOptionsCard"
            component={RideOptions}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
