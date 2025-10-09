import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const WalkthroughScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Welcome');
  };

  const handleSkip = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Main Container with Image, Overlay and Content */}
      <View className="flex-1">
        {/* Image Section */}
        <View className="flex-1">
          <Image
            source={require('../../../assets/skystruct.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        {/* White Gradient Overlay (slightly above bottom) */}
        <View className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

        {/* White Container ON TOP of the overlay */}
        <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6">
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Divider */}
            <View className="border-t border-gray-300 my-4" />

            {/* Main Description */}
            <View className="mb-6">
              <Text className="text-xl font-bold text-gray-800 mb-3">
                Manage Your Villa, Interior & Building Projects
              </Text>
              <Text className="text-gray-600 text-base leading-6">
                Streamline villa, interior, and building management with real-time collaboration
              </Text>
            </View>

            {/* Navigation Buttons */}
            <View className="flex-row justify-between items-center mt-4">
              <TouchableOpacity 
                className="px-6 py-3"
                onPress={handleSkip}
              >
                <Text className="text-gray-500 font-medium text-base">Skip</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="bg-blue-500 px-8 py-3 rounded-full"
                onPress={handleNext}
              >
                <Text className="text-white font-semibold text-base">Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default WalkthroughScreen;