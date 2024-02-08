import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "tailwind-react-native-classnames";

const favData = [
  {
    id: "54",
    icon: "home",
    location: "Home",
    destination: "Rajamandry ,Andhra Pradesh, IND",
  },
  {
    id: "89",
    icon: "pushpin",
    location: "College",
    destination: "Kakinada ,Andhra Pradesh, IND",
  },
];

const NavRides = () => {
  return (
    <View>
      {favData.map((ele) => {
        return (
          <TouchableOpacity style={tw`flex-row items-center p-5`} key={ele.id}>
            <Icon
              name={ele.icon}
              size={18}
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            />
            <View>
              <Text style={tw`font-bold text-lg`}>{ele.location}</Text>
              <Text style={tw`text-gray-500`}>{ele.destination}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavRides;
