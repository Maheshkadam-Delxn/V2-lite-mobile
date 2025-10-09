import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to WalkthroughScreen after 1 second
      navigation.navigate('Walkthrough');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-white-800">
      {/* App Logo */}
      <Image
        source={require("../../../assets/splash1.png")}
        className="w-80 h-80 mb-6"
        resizeMode="contain"
      />

      {/* App Name */}
      
      {/* <Text className="text-black text-base mt-2">Loading...</Text> */}

      {/* Loader */}
      <ActivityIndicator size="large" color="#0a0000ff" className="mt-6" />
    </View>
  );
};

export default SplashScreen;