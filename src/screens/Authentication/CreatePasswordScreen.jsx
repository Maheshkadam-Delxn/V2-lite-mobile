import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Modal, Animated, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const CreatePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [fadeAnim] = useState(new Animated.Value(0))
  const [scaleAnim] = useState(new Animated.Value(0.8))
  const navigation = useNavigation()

  const handleContinue = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      console.log('New Password:', newPassword)
      console.log('Confirm Password:', confirmPassword)
      setShowSuccessModal(true)
    }
  }

  useEffect(() => {
    if (showSuccessModal) {
      // Start animations when modal is shown
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start()

      // Auto navigate after delay
      const timer = setTimeout(() => {
        setShowSuccessModal(false)
        // navigation.navigate('Homepage')
      }, 3000)

      return () => clearTimeout(timer)
    } else {
      // Reset animations when modal is hidden
      fadeAnim.setValue(0)
      scaleAnim.setValue(0.8)
    }
  }, [showSuccessModal])

  // Eye icon component
  const EyeIcon = ({ visible, onPress }) => (
    <TouchableOpacity
      className="absolute right-4 top-0 bottom-0 justify-center"
      onPress={onPress}
    >
      <Text className="text-2xl text-gray-500">
        {visible ? '👁️' : '👁️‍🗨️'}
      </Text>
    </TouchableOpacity>
  )

  // Check if passwords match and are not empty
  const isContinueEnabled = newPassword && confirmPassword && newPassword === confirmPassword

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

      {/* Main Content Container */}
      <View className="flex-1 px-6 pt-6">
        {/* Header Card */}
        <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-6"
          style={{ elevation: 3 }}>
          <Text className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Urbanist-Bold' }}>
            Create New Password
          </Text>
          <Text className="text-gray-500 text-base leading-6" style={{ fontFamily: 'Urbanist-Regular' }}>
            Create your new password. If you forget it, then{'\n'}
            you have to do forgot password.
          </Text>
        </View>

        {/* Form Container */}
        <View className="flex-1 bg-white rounded-3xl shadow-lg border border-gray-100"
          style={{ elevation: 3 }}>
          <View className="p-6 flex-1">
            {/* Password Input Fields */}
            <View className="space-y-6">
              {/* New Password Input */}
              <View>
                <Text className="text-gray-800 text-sm font-medium mb-3" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                  New Password
                </Text>
                <View className="relative">
                  <TextInput
                    className="w-full h-14 px-4 rounded-2xl border-2 border-gray-300 bg-gray-50 text-gray-800"
                    style={{ fontFamily: 'Urbanist-Regular' }}
                    placeholder="Enter new password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showNewPassword}
                    value={newPassword}
                    onChangeText={setNewPassword}
                  />
                  <EyeIcon
                    visible={showNewPassword}
                    onPress={() => setShowNewPassword(!showNewPassword)}
                  />
                </View>
              </View>

              {/* Confirm Password Input */}
              <View>
                <Text className="text-gray-800 text-sm font-medium mb-3" style={{ fontFamily: 'Urbanist-SemiBold' }}>
                  Confirm New Password
                </Text>
                <View className="relative">
                  <TextInput
                    className="w-full h-14 px-4 rounded-2xl border-2 border-gray-300 bg-gray-50 text-gray-800"
                    style={{ fontFamily: 'Urbanist-Regular' }}
                    placeholder="Confirm new password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                  <EyeIcon
                    visible={showConfirmPassword}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </View>

                {/* Password match validation */}
                {confirmPassword && newPassword !== confirmPassword && (
                  <Text className="text-red-500 text-sm mt-2" style={{ fontFamily: 'Urbanist-Regular' }}>
                    Passwords do not match
                  </Text>
                )}
                {confirmPassword && newPassword === confirmPassword && (
                  <Text className="text-green-500 text-sm mt-2" style={{ fontFamily: 'Urbanist-Regular' }}>
                    Passwords match
                  </Text>
                )}
              </View>
            </View>

            {/* Spacer */}
            <View className="flex-1" />

            {/* Divider line above Continue button */}
            <View className="w-full h-px bg-gray-200 my-6" />

            {/* Continue Button */}
            <View>
              <TouchableOpacity
                className={`rounded-2xl items-center shadow-lg ${isContinueEnabled ? 'bg-blue-600' : 'bg-blue-300'
                  }`}
                style={{ height: 56 }}
                onPress={handleContinue}
                disabled={!isContinueEnabled}
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

      {/* Success Modal */}
      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="none"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View className="flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            }}
          >
            <View
              style={{
                width: 340,
                height: 500, // 🔧 Adjusted popup height
                backgroundColor: '#fff',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'flex-start',
                elevation: 15,
                zIndex: 999,
                overflow: 'hidden', // 👈 Keeps all content inside the popup
                paddingHorizontal: 24,
                paddingTop: 50,
              }}
            >
              {/* ✅ Success Image */}
              <Image
                source={require('../../../assets/resetsuccesful.png')}
                style={{
                  width: 160,
                  height: 160,
                  resizeMode: 'contain',
                  marginBottom: 30,
                }}
              />

              {/* ✅ Text Content */}
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: '#235DFF',
                  textAlign: 'center',
                  marginBottom: 8,
                }}
              >
                Reset Password{'\n'}Successful!
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  color: '#6B7280',
                  textAlign: 'center',
                  marginBottom: 4,
                }}
              >
                Please wait...
              </Text>




            </View>
          </Animated.View>
        </View>
      </Modal>

    </SafeAreaView>
  )
}

export default CreatePasswordScreen