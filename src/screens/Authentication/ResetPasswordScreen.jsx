import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('sandrew.ainsley@yourdomain.com');
  const navigation = useNavigation();

  const handleContinue = () => {
    console.log('Continue to OTP with email:', email);
     navigation.navigate('OTPVerification');
    // navigation.navigate('OTPScreen');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      
      {/* Main Content Container */}
      <View className="flex-1 px-6 pt-6">
        {/* Header Card */}
        <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6" 
              style={{ elevation: 3 }}>
          <Text className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Urbanist-Bold' }}>
            Reset your password
          </Text>
          <Text className="text-gray-500 text-base leading-6" style={{ fontFamily: 'Urbanist-Regular' }}>
            Please enter your email and we will send an{'\n'}
            OTP code in the next step to reset your{'\n'}
            password.
          </Text>
        </View>

        {/* Form Container */}
        <View className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100" 
              style={{ elevation: 3 }}>
          <View className="p-6 flex-1">
            {/* Email Input Section */}
            <View className="mb-8">
              <Text className="text-gray-800 text-base font-medium mb-3" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                Email
              </Text>
              <View className="flex-row items-center bg-gray-50 rounded-2xl border border-gray-200" 
                    style={{ height: 56 }}>
                <TextInput
                  className="flex-1 px-5 text-gray-800 text-base"
                  placeholder="Enter your email"
                  placeholderTextColor="#9CA3AF"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={{ fontFamily: 'Urbanist-Regular' }}
                />
                <View className="pr-4">
                  <View className="w-6 h-6 items-center justify-center">
                    <Text className="text-gray-400 text-lg">✉️</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Spacer to push button to bottom */}
            <View className="flex-1" />

            {/* Divider line above Continue button */}
            <View className="w-full h-px bg-gray-200 my-6" />

            {/* Continue Button */}
            <View>
              <TouchableOpacity 
                className="bg-blue-600 rounded-2xl items-center shadow-lg"
                style={{ height: 56 }}
                onPress={handleContinue}
              >
                <View className="flex-1 items-center justify-center">
                  <Text className="text-white text-base font-semibold" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ResetPasswordScreen;