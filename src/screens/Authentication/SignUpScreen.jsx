import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigation = useNavigation();

  const handleSignup = () => {
    console.log('Signup attempted with:', { email, password });
  };

  const handleSocialSignup = (provider) => {
    console.log(`${provider} signup attempted`);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      
      <View className="flex-1">
        {/* Main Content Container */}
        <View className="flex-1 px-6 pt-6" style={{ minHeight: height }}>
          {/* Welcome Card */}
          <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6" 
                style={{ elevation: 3 }}>
            <Text className="text-3xl font-medium text-gray-900 mb-3">Hello there 👋</Text>
            <Text className="text-gray-500 text-base leading-6">
              Please enter your email & password to create an account.
            </Text>
          </View>

          {/* Form Container - Takes remaining space */}
          <View className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100" 
                style={{ elevation: 3, minHeight: height * 0.5 }}>
            <View className="p-6 flex-1">
              {/* Form fields */}
              <View className="mb-6">
                <Text className="text-gray-800 text-base font-medium mb-3">Email</Text>
                <View className="flex-row items-center bg-gray-50 rounded-2xl border border-gray-200" 
                      style={{ height: 56 }}>
                  <TextInput
                    className="flex-1 px-5 text-gray-800 text-base"
                    placeholder="Email"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <View className="pr-4">
                    <View className="w-6 h-6 items-center justify-center">
                      <Text className="text-gray-400 text-lg">✉️</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="mb-6">
                <Text className="text-gray-800 text-base font-medium mb-3">Password</Text>
                <View className="flex-row items-center bg-gray-50 rounded-2xl border border-gray-200" 
                      style={{ height: 56 }}>
                  <TextInput
                    className="flex-1 px-5 text-gray-800 text-base"
                    placeholder="Password"
                    placeholderTextColor="#9CA3AF"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    className="pr-4"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <View className="w-8 h-8 bg-blue-100 rounded-full items-center justify-center">
                      <Text className="text-blue-600 text-xs font-bold">
                        {showPassword ? '🔓' : '🔒'}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Terms agreement */}
              <View className="flex-row items-center mb-8">
                <TouchableOpacity
                  className="mr-3"
                  onPress={() => setAgreeToTerms(!agreeToTerms)}
                >
                  <View className={`w-5 h-5 rounded border-2 items-center justify-center ${
                    agreeToTerms ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                  }`}>
                    {agreeToTerms && (
                      <Text className="text-white text-xs font-bold">✓</Text>
                    )}
                  </View>
                </TouchableOpacity>
                <Text className="text-gray-700 text-sm">
                  I agree to Skystruct <Text className="text-blue-600 font-medium">Terms, & Privacy Policy</Text>
                </Text>
              </View>

              {/* First Divider line */}
              <View className="w-full h-px bg-gray-200 my-6" />

              {/* "Already have account" link */}
              <View className="flex-row justify-center mb-6">
                <Text className="text-gray-500 text-sm">Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text className="text-blue-600 text-sm font-medium">Sign in</Text>
                </TouchableOpacity>
              </View>

              {/* Social login divider */}
              <View className="flex-row items-center w-full mt-6 mb-6">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="font-urbanist text-sm font-medium text-gray-600 mx-4">
                  or continue with
                </Text>
                <View className="flex-1 h-px bg-gray-300" />
              </View>

              {/* Social login buttons */}
              <View className="flex-row justify-between w-full mb-8 px-4">
                {/* Google */}
                <TouchableOpacity 
                  className="w-16 h-16 rounded-full items-center justify-center border border-gray-300 bg-white shadow-sm"
                  onPress={() => handleSocialSignup('Google')}
                >
                  <AntDesign name="google" size={24} color="#DB4437" />
                </TouchableOpacity>

                {/* Apple */}
                <TouchableOpacity 
                  className="w-16 h-16 rounded-full items-center justify-center border border-gray-300 bg-white shadow-sm"
                  onPress={() => handleSocialSignup('Apple')}
                >
                  <AntDesign name="apple1" size={24} color="#000000" />
                </TouchableOpacity>

                {/* Facebook */}
                <TouchableOpacity 
                  className="w-16 h-16 rounded-full items-center justify-center border border-gray-300 bg-white shadow-sm"
                  onPress={() => handleSocialSignup('Facebook')}
                >
                  <FontAwesome name="facebook" size={24} color="#1877F2" />
                </TouchableOpacity>

                {/* Twitter */}
                <TouchableOpacity 
                  className="w-16 h-16 rounded-full items-center justify-center border border-gray-300 bg-white shadow-sm"
                  onPress={() => handleSocialSignup('Twitter')}
                >
                  <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
                </TouchableOpacity>
              </View>

              {/* Divider line just above sign-up button */}
              <View className="w-full h-px bg-gray-200 mt-6" />

              {/* Sign-up button at the very bottom */}
              <View className="mt-6">
                <TouchableOpacity 
                  className="bg-blue-600 rounded-2xl items-center shadow-lg"
                  style={{ height: 56 }}
                  onPress={handleSignup}
                >
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-white text-base font-semibold">Sign up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}