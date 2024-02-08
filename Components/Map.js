import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../Redux/travelSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "@env";
const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;

    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {
          top: 150,
          right: 150,
          bottom: 10,
          left: 100,
        },
        animated: true,
      });
    }, 1000);
  }, [origin, destination]);
  return (
    <MapView
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={tw`h-full`}
      ref={mapRef}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin && origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          identifier="origin"
          description={origin.description}
        />
      )}
      {destination && destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          identifier="destination"
          description={destination.description}
        />
      )}
    </MapView>
  );
};

export default Map;
