import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../Redux/travelSlice";
import { useNavigation } from "@react-navigation/native";

const favData = [
  {
    id: "54",
    icon: "home",
    location: "Home",
    destination: {
      description: "Rajahmundry, Andhra Pradesh, India",
      location: { lat: 17.0005383, lng: 81.8040345 },
    },
  },
  {
    id: "89",
    icon: "pushpin",
    location: "College",
    destination: {
      description: "Surampalem, Andhra Pradesh, India",
      location: { lat: 17.081386, lng: 82.05705789999999 },
    },
  },
];

const NavRides = ({ typeOfDestination }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function navigationFunction({ description, location }) {
    if (typeOfDestination === "origin") {
      dispatch(
        setOrigin({
          location: location,
          description: description,
        })
      );
      navigation.navigate("mapscreen");
    }

    if (typeOfDestination === "destination") {
      dispatch(
        setDestination({
          location: location,
          description: description,
        })
      );
      navigation.navigate("rideOptionsCard");
    }
  }
  return (
    <View>
      {favData.map((ele) => {
        return (
          <TouchableOpacity
            style={tw`flex-row items-center p-5`}
            key={ele.id}
            onPress={() => {
              navigationFunction(ele.destination);
            }}
          >
            <Icon
              name={ele.icon}
              size={18}
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            />
            <View>
              <Text style={tw`font-bold text-lg`}>{ele.location}</Text>
              <Text style={tw`text-gray-500`}>
                {ele.destination.description}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavRides;
