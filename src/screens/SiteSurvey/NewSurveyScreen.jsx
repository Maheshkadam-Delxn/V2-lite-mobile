import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const CreateSurveyScreen = () => {
  const navigation = useNavigation()
  
  // State for tabs and form data
  const [activeTab, setActiveTab] = useState('Sites')
  const [formData, setFormData] = useState({
    projectName: 'Project Name 1',
    surveyType: 'Select',
    description: 'The budget includes material costs, labor, and subcontractor fees. Client approvals are required at key project milestones. Additional customization may impact the final budget.',
    assignContractor: 'Select',
    date: new Date(),
  })
  
  // Dropdown states
  const [showProjectDropdown, setShowProjectDropdown] = useState(false)
  const [showSurveyTypeDropdown, setShowSurveyTypeDropdown] = useState(false)
  const [showContractorDropdown, setShowContractorDropdown] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showUploadOptions, setShowUploadOptions] = useState(false)

  // Dynamic data arrays
  const tabs = ['Tasks', 'Transactions', 'Sites', 'Attendance']
  
  const projects = [
    'Project Name 1',
    'Project Name 2', 
    'Project Name 3',
    'New Construction Site',
    'Renovation Project'
  ]
  
  const surveyTypes = [
    'Topographic Survey',
    'Boundary Survey',
    'Construction Survey',
    'Hydrographic Survey',
    'Geodetic Survey'
  ]
  
  const contractors = [
    'ABC Construction Ltd.',
    'XYZ Builders Inc.',
    'Quality Contractors Co.',
    'Elite Construction Group'
  ]

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
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSaveDraft = () => {
    console.log('Save Draft:', formData)
    alert('Draft saved successfully!')
  }

  const handleSubmit = () => {
    if (formData.surveyType === 'Select') {
      alert('Please select a survey type')
     
      return
    }
    if (formData.assignContractor === 'Select') {
      alert('Please assign a contractor')
      return
    }
    
    console.log('Submit:', { ...formData, uploadedFiles })
    alert('Survey submitted successfully!')
    navigation.navigate('SurveyRequestDetails')
  }

  const handleCancel = () => navigation.goBack()

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

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false)
    if (selectedDate) {
      handleInputChange('date', selectedDate)
    }
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Render dropdown items
  const renderDropdownItems = (items, onSelect, isVisible) => {
    if (!isVisible) return null

    return (
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => {
          setShowProjectDropdown(false)
          setShowSurveyTypeDropdown(false)
          setShowContractorDropdown(false)
        }}
      >
        <TouchableWithoutFeedback 
          onPress={() => {
            setShowProjectDropdown(false)
            setShowSurveyTypeDropdown(false)
            setShowContractorDropdown(false)
          }}
        >
          <View className="flex-1 bg-black/50 justify-center items-center">
            <View className="bg-white rounded-xl w-11/12 max-w-sm">
              <ScrollView className="max-h-80">
                {items.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    className="px-4 py-3 border-b border-gray-100"
                    onPress={() => {
                      onSelect(item)
                      setShowProjectDropdown(false)
                      setShowSurveyTypeDropdown(false)
                      setShowContractorDropdown(false)
                    }}
                  >
                    <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-black">
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
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
        {/* Tabs */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="mb-4"
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

        {/* Form Card */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          {/* Project */}
          <View className="mb-4">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-2">
              Project
            </Text>
            <TouchableOpacity 
              className="border border-gray-200 rounded-lg p-3 flex-row justify-between items-center"
              onPress={() => setShowProjectDropdown(true)}
            >
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-black">
                {formData.projectName}
              </Text>
              <Text className="text-gray-400">▼</Text>
            </TouchableOpacity>
          </View>

          {/* Survey Type */}
          <View className="mb-4">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-2">
              Survey Type
            </Text>
            <TouchableOpacity 
              className="border border-gray-200 rounded-lg p-3 flex-row justify-between items-center"
              onPress={() => setShowSurveyTypeDropdown(true)}
            >
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className={`text-sm ${
                formData.surveyType === 'Select' ? 'text-gray-500' : 'text-black'
              }`}>
                {formData.surveyType}
              </Text>
              <Text className="text-gray-400">▼</Text>
            </TouchableOpacity>
          </View>

          {/* Description */}
          <View className="mb-4">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-2">
              Description
            </Text>
            <TextInput
              style={{ fontFamily: 'Urbanist-Regular' }}
              className="text-sm text-gray-600 leading-5 border border-gray-200 rounded-lg p-3 min-h-[100px]"
              multiline
              value={formData.description}
              onChangeText={(text) => handleInputChange('description', text)}
              placeholder="Enter survey description..."
            />
          </View>

          {/* Assign Contractor */}
          <View className="mb-4">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-2">
              Assign Contractor
            </Text>
            <TouchableOpacity 
              className="border border-gray-200 rounded-lg p-3 flex-row justify-between items-center"
              onPress={() => setShowContractorDropdown(true)}
            >
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className={`text-sm ${
                formData.assignContractor === 'Select' ? 'text-gray-500' : 'text-black'
              }`}>
                {formData.assignContractor}
              </Text>
              <Text className="text-gray-400">▼</Text>
            </TouchableOpacity>
          </View>

          {/* Date */}
          <View className="mb-4">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-2">
              Date
            </Text>
            <TouchableOpacity 
              className="border border-gray-200 rounded-lg p-3 flex-row justify-between items-center"
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-black">
                {formatDate(formData.date)}
              </Text>
              <Text className="text-gray-400">📅</Text>
            </TouchableOpacity>
            
            {showDatePicker && (
              <DateTimePicker
                value={formData.date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>

          {/* Photos */}
          <View className="mb-4">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-2">
              Photos & Documents
            </Text>
            
            {/* Upload Area */}
            <TouchableOpacity 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 items-center justify-center mb-4"
              onPress={() => setShowUploadOptions(true)}
            >
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-3">
                <Text className="text-2xl">⬆</Text>
              </View>
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500 text-center">
                Browse files to upload{'\n'}
                <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-xs text-gray-400">
                  Supported: JPG, PNG, PDF, DOC (Max 10MB)
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <>
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
              </>
            )}
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity
            className="flex-1 rounded-lg py-3 items-center"
            style={{ backgroundColor: '#06B6D410' }}
            onPress={handleSaveDraft}
          >
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-cyan-500 text-sm">
              Save Draft
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-emerald-500 rounded-lg py-3 items-center"
            onPress={handleSubmit}
          >
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-sm">
              Submit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 rounded-lg py-3 items-center"
            style={{ backgroundColor: '#F7555510' }}
            onPress={handleCancel}
          >
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-red-500 text-sm">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Dropdown Modals */}
      {renderDropdownItems(projects, (item) => handleInputChange('projectName', item), showProjectDropdown)}
      {renderDropdownItems(surveyTypes, (item) => handleInputChange('surveyType', item), showSurveyTypeDropdown)}
      {renderDropdownItems(contractors, (item) => handleInputChange('assignContractor', item), showContractorDropdown)}
      
      {/* Upload Options Modal */}
      {renderUploadOptions()}
    </View>
  )
}

export default CreateSurveyScreen