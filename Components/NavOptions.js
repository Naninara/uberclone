import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Redux/travelSlice";
const data = [
  {
    id: "895",
    title: "Get A Ride",
    image: "https://links.papareact.com/3pn",
    screen: "mapscreen",
  },
  {
    id: "265",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const [error, setError] = useState(null);
  function navigationFunction(screenName) {
    if (!origin) {
      setError(true);
      return;
    }
    setError(null);
    navigation.navigate(screenName);
  }
  return (
    <View>
      {error && (
        <Text style={tw`text-red-500 ml-2`}>Please Select Your Place</Text>
      )}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-gray-200 p-2 pb-8 pt-4  m-2 w-40 `}
            onPress={() => {
              navigationFunction(item.screen);
            }}
          >
            <View style={tw`flex justify-center items-center `}>
              <Image
                source={{ uri: item.image }}
                style={{ height: 120, width: 120, resizeMode: "contain" }}
              />
              <Text style={tw`mt-2 text-lg font-black`}>{item.title}</Text>
              <Icon
                name="arrowright"
                size={20}
                style={tw`bg-black text-white p-1 rounded-full mt-4`}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
