import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectDestination } from "../Redux/travelSlice";
import tw from "tailwind-react-native-classnames";

const RideOptions = () => {
  const destination = useSelector(selectDestination);
  console.log(destination);
  return (
    <View>
      <Text style={tw`text-center py-5 text-xl font-semibold `}>
        Select a Ride
      </Text>
    </View>
  );
};

export default RideOptions;
