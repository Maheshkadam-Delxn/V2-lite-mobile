import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar, 
  Dimensions, 
  TextInput 
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(55);
  const navigation = useNavigation();

  const inputs = useRef([]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const handleResendCode = () => {
    if (timer === 0) {
      setTimer(55); // restart the timer
      console.log('Resending OTP code...');
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      console.log('Verifying OTP:', enteredOtp);
      navigation.navigate('CreatePassword');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      
      <View className="flex-1 px-6 pt-6">
        {/* Header Card */}
        <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6" style={{ elevation: 3 }}>
          <Text className="text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Urbanist-Bold' }}>
            OTP code verification
          </Text>
          <Text className="text-gray-500 text-base leading-6 mb-2" style={{ fontFamily: 'Urbanist-Regular' }}>
            We have sent an OTP code to your email 
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }}> san******ley@yourdomain.com</Text>. 
            Enter the OTP code below to verify.
          </Text>
        </View>

        {/* Form Container */}
        <View className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100" style={{ elevation: 3 }}>
          <View className="p-6 flex-1">
            
            {/* OTP Input Section */}
            <View className="items-center mb-8">
              <Text className="text-gray-800 text-base mb-4" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                Enter OTP Code
              </Text>
              
              {/* OTP Boxes */}
              <View className="flex-row justify-evenly mb-8 px-4 w-full">
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    value={digit}
                    maxLength={1}
                    keyboardType="numeric"
                    className="w-16 h-16 rounded-2xl border-2 border-gray-300 bg-gray-50 text-center text-3xl text-gray-800"
                    style={{ fontFamily: 'Urbanist-Bold' }}
                    onChangeText={(value) => {
                      const newOtp = [...otp];
                      newOtp[index] = value;
                      setOtp(newOtp);

                      if (value && index < otp.length - 1) {
                        inputs.current[index + 1].focus();
                      }
                    }}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                        inputs.current[index - 1].focus();
                      }
                    }}
                  />
                ))}
              </View>

              {/* Resend Section */}
              <View className="items-center mb-8">
                <Text className="text-gray-500 text-sm mb-2" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                  Didn't receive email?
                </Text>

                {timer > 0 ? (
                  <Text className="text-sm text-gray-600" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                    You can resend code in{" "}
                    <Text className="text-blue-600" style={{ fontFamily: 'Urbanist-Bold' }}>
                      {timer} s
                    </Text>
                  </Text>
                ) : (
                  <TouchableOpacity onPress={handleResendCode}>
                    <Text className="text-sm text-blue-600" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                      Resend code
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View className="flex-1" />

            {/* Divider */}
            <View className="w-full h-px bg-gray-200 my-6" />

            {/* Verify Button */}
            <View>
              <TouchableOpacity 
                className="bg-blue-600 rounded-2xl items-center shadow-lg"
                style={{ height: 56 }}
                onPress={handleVerify}
              >
                <View className="flex-1 items-center justify-center">
                  <Text className="text-white text-base" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                    Verify
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;
