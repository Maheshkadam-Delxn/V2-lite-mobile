import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';


const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => navigation.navigate('SignUp');
  const handleSignIn = () => navigation.navigate('SignIn');

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      showsVerticalScrollIndicator={false}
      className="bg-white px-6"
    >
      <View className="items-center mt-12">
        {/* Logo */}
        <Image
          source={require("../../../assets/skylogo.png")}
          className="w-48 h-48 mb-8"
          resizeMode="contain"
        />

        {/* Main Title */}
        <Text className="font-urbanist text-3xl font-bold text-center text-black mb-4">
          Welcome to SkyStruct Lite
        </Text>

        {/* Subtitle */}
<Text className="font-urbanist text-base font-normal text-center text-gray-600 leading-6 mb-10 px-2">
  Effortlessly oversee villa, interior, and building projects with seamless 
  collaboration and real-time updates.
</Text>


        {/* Sign Up Button */}
<TouchableOpacity 
  className="bg-[#0E72ED] py-4 rounded-xl w-full mb-6"
  onPress={handleSignUp}
>
  <Text className="font-urbanist text-base font-semibold text-white text-center">
    Sign up
  </Text>
</TouchableOpacity>


        {/* Sign In Button */}
        <TouchableOpacity 
  className="py-4 rounded-xl w-full mb-20"
  style={{ backgroundColor: '#E9EFFF' }}
  onPress={handleSignIn}
>
  <Text className="font-urbanist text-base font-semibold text-center"
        style={{ color: '#1D4ED8' }} // or replace with your exact blue shade
  >
    Sign in
  </Text>
</TouchableOpacity>


        {/* Divider with text */}
        <View className="flex-row items-center w-full mb-8">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="font-urbanist text-sm font-medium text-gray-600 mx-4">
            or continue with
          </Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

  {/* Social Login */}
<View className="flex-row justify-between w-full mb-8 px-4">
  {/* Google */}
  <TouchableOpacity className="w-16 h-16 rounded-full items-center justify-center border border-gray-300">
    <AntDesign name="google" size={24} color="#DB4437" />
  </TouchableOpacity>

  {/* Apple */}
  <TouchableOpacity className="w-16 h-16 rounded-full items-center justify-center border border-gray-300">
    <AntDesign name="apple1" size={24} color="#000000" />
  </TouchableOpacity>

  {/* Facebook */}
  <TouchableOpacity className="w-16 h-16 rounded-full items-center justify-center border border-gray-300">
    <FontAwesome name="facebook" size={24} color="#1877F2" />
  </TouchableOpacity>

  {/* Twitter */}
  <TouchableOpacity className="w-16 h-16 rounded-full items-center justify-center border border-gray-300">
    <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
  </TouchableOpacity>
</View>

      </View>
    </ScrollView>
  );
}

export default WelcomeScreen;
