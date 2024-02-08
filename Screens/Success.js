import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/AntDesign";
const Success = () => {
  return (
    <View style={tw`h-full flex items-center justify-center`}>
      <Icon
        name="check"
        size={50}
        style={tw`bg-green-500 text-white p-2 rounded-full mb-2`}
      />
      <Text style={tw`text-xl mt-4 font-extrabold`}>
        Success Uber On It's Way
      </Text>
    </View>
  );
};

export default Success;
