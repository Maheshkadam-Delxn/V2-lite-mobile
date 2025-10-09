import { View, Text, TextInput, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const SurveyDetailsScreen = () => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Sites')
  const [showCommentModal, setShowCommentModal] = useState(false)
  const [showAttachModal, setShowAttachModal] = useState(false)
  const [showUploadOptions, setShowUploadOptions] = useState(false)
  const [comment, setComment] = useState('')

  const tabs = ['Tasks', 'Transactions', 'Sites', 'Attendance']

  const surveyData = {
    code: 'SRQ - 001',
    status: 'Safety',
    project: 'Project Alpha',
    contractor: 'Contractor A',
    dateSubmitted: '28-03-2025'
  }

  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'Website-templates.psd', icon: '📄', color: 'bg-blue-500', type: 'design' },
    { id: 2, name: 'Logo-vector.ai', icon: '📄', color: 'bg-red-500', type: 'vector' }
  ])

  // Image Picker Options
  const imagePickerOptions = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
    quality: 0.8,
    saveToPhotos: true,
  }

  // Handlers
  const handleTabPress = (tab) => setActiveTab(tab)
  
  const handleAddComments = () => setShowCommentModal(true)
  
  const handleAttachDocument = () => setShowAttachModal(true)

  const handleSubmitComment = () => {
    console.log('Comment submitted:', comment)
    setShowCommentModal(false)
    setComment('')
  }

  const handleCancelComment = () => {
    setShowCommentModal(false)
    setComment('')
  }

  const handleSubmitAttachment = () => {
    console.log('Documents submitted:', uploadedFiles)
    setShowAttachModal(false)
    // You can add your submission logic here
  }

  const handleCancelAttachment = () => {
    setShowAttachModal(false)
  }

  // File upload handlers
  const handleOpenCamera = () => {
    setShowUploadOptions(false)
    launchCamera(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera')
      } else if (response.error) {
        console.log('Camera Error: ', response.error)
        Alert.alert('Error', 'Failed to capture image')
      } else if (response.assets && response.assets.length > 0) {
        const image = response.assets[0]
        handleAddImage(image)
      }
    })
  }

  const handleOpenGallery = () => {
    setShowUploadOptions(false)
    launchImageLibrary(imagePickerOptions, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
        Alert.alert('Error', 'Failed to pick image')
      } else if (response.assets && response.assets.length > 0) {
        // Handle multiple selected images
        response.assets.forEach(image => {
          handleAddImage(image)
        })
      }
    })
  }

  const handleAddImage = (image) => {
    const fileExtension = image.fileName?.split('.').pop() || 'jpg'
    const newFile = {
      id: Date.now() + Math.random(),
      name: `survey-image-${uploadedFiles.length + 1}.${fileExtension}`,
      icon: '🖼️',
      color: `bg-${['green', 'purple', 'indigo', 'pink'][uploadedFiles.length % 4]}-500`,
      type: 'image',
      uri: image.uri,
      fileSize: image.fileSize,
      width: image.width,
      height: image.height
    }
    setUploadedFiles(prev => [...prev, newFile])
  }

  const handleRemoveFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
  }

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Render upload options modal
  const renderUploadOptions = () => {
    return (
      <Modal
        transparent={true}
        visible={showUploadOptions}
        animationType="slide"
        onRequestClose={() => setShowUploadOptions(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowUploadOptions(false)}>
          <View className="flex-1 bg-black/50 justify-end">
            <TouchableWithoutFeedback>
              <View className="bg-white rounded-t-3xl p-6">
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-lg text-black text-center mb-6">
                  Upload Photo
                </Text>
                
                <TouchableOpacity
                  className="flex-row items-center py-4 border-b border-gray-100"
                  onPress={handleOpenCamera}
                >
                  <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center mr-3">
                    <Text className="text-blue-600 text-lg">📷</Text>
                  </View>
                  <View className="flex-1">
                    <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-base text-black">
                      Take Photo
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500">
                      Use your camera to take a new photo
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-row items-center py-4 border-b border-gray-100"
                  onPress={handleOpenGallery}
                >
                  <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center mr-3">
                    <Text className="text-green-600 text-lg">🖼️</Text>
                  </View>
                  <View className="flex-1">
                    <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-base text-black">
                      Choose from Gallery
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500">
                      Select photos from your device
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  className="py-4 rounded-lg bg-gray-100 mt-2"
                  onPress={() => setShowUploadOptions(false)}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-center text-gray-600 text-base">
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="bg-white rounded-xl px-4 py-3 mb-5 flex-row items-center shadow-sm">
          <Text className="text-gray-400 text-base mr-2">🔍</Text>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#9CA3AF"
            className="flex-1 text-sm text-gray-600"
            style={{ fontFamily: 'Urbanist-Regular' }}
          />
        </View>

        {/* Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="mb-5"
        >
          <View className="flex-row">
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                className={`px-6 py-2 rounded-full mr-2.5 ${
                  activeTab === tab
                    ? 'bg-blue-600 shadow-md'
                    : 'bg-white border border-blue-600'
                }`}
                onPress={() => handleTabPress(tab)}
              >
                <Text
                  style={{ fontFamily: 'Urbanist-Medium' }}
                  className={`text-sm ${
                    activeTab === tab ? 'text-white' : 'text-blue-600'
                  }`}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Survey Card */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-2">
            <Text 
              className="text-base font-semibold text-black"
              style={{ fontFamily: 'Urbanist-SemiBold' }}
            >
              {surveyData.code}
            </Text>
            <View className="bg-blue-100 px-3 py-1 rounded-lg">
              <Text 
                className="text-xs font-medium text-blue-700"
                style={{ fontFamily: 'Urbanist-Medium' }}
              >
                {surveyData.status}
              </Text>
            </View>
          </View>

          {/* Details */}
          <View className="mb-1">
            <View className="flex-row justify-between mb-1">
              <Text 
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                Project :
              </Text>
              <Text 
                className="text-sm font-medium text-black"
                style={{ fontFamily: 'Urbanist-Medium' }}
              >
                {surveyData.project}
              </Text>
            </View>
            <View className="flex-row justify-between mb-1">
              <Text 
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                Contractor
              </Text>
              <Text 
                className="text-sm font-medium text-cyan-500"
                style={{ fontFamily: 'Urbanist-Medium' }}
              >
                {surveyData.contractor}
              </Text>
            </View>
            <View className="flex-row justify-between mb-1">
              <Text 
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                Date Submitted
              </Text>
              <Text 
                className="text-sm font-medium text-black"
                style={{ fontFamily: 'Urbanist-Medium' }}
              >
                {surveyData.dateSubmitted}
              </Text>
            </View>
          </View>

          {/* Action Links */}
          <View className="flex-row justify-between pt-3 border-t border-gray-200 mt-2">
            <TouchableOpacity onPress={handleAddComments}>
              <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-sm text-blue-600">
                Add Comments
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleAttachDocument}>
              <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-sm text-blue-600">
                Attach Document
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Add Comment Modal */}
      <Modal visible={showCommentModal} transparent animationType="slide">
        <TouchableOpacity 
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={handleCancelComment}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <View className="bg-white rounded-t-3xl p-8">
              {/* Handle Bar */}
              <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-6" />
              
              <Text style={{ fontFamily: 'Urbanist-Bold', fontWeight: '700' }} className="text-2xl text-black text-center mb-6">
                Add Comment
              </Text>
              
              {/* Comment Input */}
              <View className="mb-6">
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
                  Comment
                </Text>
                <TextInput
                  style={{ fontFamily: 'Urbanist-Regular' }}
                  className="bg-gray-50 rounded-xl p-4 text-sm text-gray-900 min-h-[120px]"
                  placeholder="Enter the Comment"
                  placeholderTextColor="#9CA3AF"
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  value={comment}
                  onChangeText={setComment}
                />
              </View>
              
              <View className="flex-row gap-4">
                <TouchableOpacity
                  className="flex-1 rounded-xl py-4 items-center"
                  style={{ backgroundColor: '#F7555510' }}
                  onPress={handleCancelComment}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-red-500 text-base">
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 bg-emerald-500 rounded-xl py-4 items-center"
                  onPress={handleSubmitComment}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-base">
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Attach Documents Modal */}
      <Modal visible={showAttachModal} transparent animationType="slide">
        <TouchableOpacity 
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={handleCancelAttachment}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <View className="bg-white rounded-t-3xl p-8">
              {/* Handle Bar */}
              <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-6" />
              
              <Text style={{ fontFamily: 'Urbanist-Bold', fontWeight: '700' }} className="text-2xl text-black text-center mb-6">
                Attach Documents
              </Text>
              
              {/* Upload Area */}
              <TouchableOpacity 
                className="border-2 border-dashed border-gray-300 rounded-xl p-8 items-center justify-center mb-6"
                onPress={() => setShowUploadOptions(true)}
              >
                <View className="w-16 h-16 bg-gray-50 rounded-full items-center justify-center mb-3">
                  <Text className="text-3xl">⬆</Text>
                </View>
                <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-600 text-center mb-2">
                  Choose a file or drag & drop it here
                </Text>
                <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-xs text-gray-400 text-center mb-4">
                  JPEG, PNG, PDF, and MP4 formats, up to 50MB
                </Text>
                <TouchableOpacity 
                  className="bg-blue-600 px-6 py-2 rounded-lg"
                  onPress={() => setShowUploadOptions(true)}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-sm">
                    Browse File
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>

              {/* Attached Files */}
              <View className="mb-6">
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
                  Uploaded Files ({uploadedFiles.length})
                </Text>
                
                {uploadedFiles.map((file) => (
                  <View 
                    key={file.id}
                    className="flex-row items-center justify-between py-3 border-b border-gray-100"
                  >
                    <View className="flex-row items-center flex-1">
                      {file.type === 'image' && file.uri ? (
                        <Image 
                          source={{ uri: file.uri }} 
                          className="w-10 h-10 rounded-lg mr-3"
                          resizeMode="cover"
                        />
                      ) : (
                        <View className={`w-10 h-10 rounded-lg ${file.color} items-center justify-center mr-3`}>
                          <Text className="text-white text-lg">{file.icon}</Text>
                        </View>
                      )}
                      <View className="flex-1">
                        <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black">
                          {file.name}
                        </Text>
                        {file.fileSize && (
                          <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-xs text-gray-500">
                            {formatFileSize(file.fileSize)}
                          </Text>
                        )}
                      </View>
                    </View>
                    <TouchableOpacity 
                      className="w-6 h-6 rounded-full bg-red-50 items-center justify-center"
                      onPress={() => handleRemoveFile(file.id)}
                    >
                      <Text className="text-red-500 text-sm">✕</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              
              <View className="flex-row gap-4">
                <TouchableOpacity
                  className="flex-1 rounded-xl py-4 items-center"
                  style={{ backgroundColor: '#F7555510' }}
                  onPress={handleCancelAttachment}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-red-500 text-base">
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 bg-emerald-500 rounded-xl py-4 items-center"
                  onPress={handleSubmitAttachment}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-base">
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Upload Options Modal */}
      {renderUploadOptions()}
    </View>
  )
}

export default SurveyDetailsScreen