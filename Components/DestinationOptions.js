import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { selectDestination, setDestination } from "../Redux/travelSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavRides from "./NavRides";
import Icon from "react-native-vector-icons/AntDesign";

const DestinationOptions = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const destination = useSelector(selectDestination);
  const [error, setError] = useState(null);
  function navigationFunction(params) {
    if (!destination) {
      setError(true);
      return;
    }
    setError(null);
    navigation.navigate("rideOptionsCard");
  }
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl font-extrabold text-xl`}>
        Hello Mavin...
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw`p-4`}>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            placeholder="Where To ?"
            query={{
              key: GOOGLE_API_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("rideOptionsCard");
            }}
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
                borderColor: "black",
                borderWidth: 2,
              },
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
          />
          {error && (
            <Text style={tw`text-red-500`}>Please Select Destination</Text>
          )}
          <NavRides typeOfDestination="destination" />
          <View>
            <TouchableOpacity
              style={tw`flex flex-row bg-black  px-4 py-3 rounded-full items-center justify-center`}
              onPress={navigationFunction}
            >
              <Icon name="car" color={"white"} size={25} />
              <Text style={tw`text-white font-bold text-lg ml-2`}>
                Book a Ride
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DestinationOptions;
