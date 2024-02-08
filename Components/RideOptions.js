import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectTravelInfo,
  setTravelInformation,
} from "../Redux/travelSlice";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "uber-x-1",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "uber-xl-2",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-Lux-1",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
const RideOptions = () => {
  const destination = useSelector(selectDestination);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const origin = useSelector(selectOrigin);
  const travelInfo = useSelector(selectTravelInfo);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    async function getData() {
      await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelInformation(data.rows[0].elements[0]));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, [origin, destination, GOOGLE_API_KEY]);
  return (
    <View>
      <View style={tw`flex-row items-center justify-between mx-4`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("destinationCard");
          }}
          style={tw`p-2 font-bold rounded-full bg-black`}
        >
          <Icon name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-center py-6 text-xl font-semibold `}>
          Select a Ride
        </Text>
        <View></View>
      </View>

      <View style={{ height: 320 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`flex-row items-center justify-between px-4 flex-1 ${
                item.id === selected?.id && "bg-gray-200"
              }`}
              onPress={() => {
                setSelected(item);
              }}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <View>
                <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                <Text>{travelInfo?.duration.text}</Text>
              </View>
              <Text style={tw`text-xl`}>
                ₹
                {Math.ceil(
                  (travelInfo?.duration?.value * 1.75 * item.multiplier) / 100
                ) === NaN
                  ? "No Service Aviliable"
                  : Math.ceil(
                      (travelInfo?.duration?.value * 1.75 * item.multiplier) /
                        100
                    )}
              </Text>
            </TouchableOpacity>
          )}
        />
        {selected && (
          <View>
            <TouchableOpacity
              style={tw`bg-black py-3 m-3`}
              onPress={() => {
                navigation.navigate("success");
              }}
            >
              <Text style={tw`text-center text-white text-xl`}>
                Choose {selected.title}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default RideOptions;
