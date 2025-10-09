import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const CreateProjectScreen = () => {
  const navigation = useNavigation()
  
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    address: '',
    startDate: '',
    endDate: '',
    budget: ''
  })

  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'Website-templates.psd', icon: '📄', color: 'bg-blue-500', progress: 60 },
    { id: 2, name: 'Logo-vector.ai', icon: '📄', color: 'bg-red-500', progress: 40 },
    { id: 3, name: 'Wireframe for team.figma', icon: '🎨', color: 'bg-purple-500', progress: 30 }
  ])

  const handleCreateProject = () => {
    console.log('Create Project:', formData)
    navigation.navigate('Tasks')
  }

  const handleBrowseFiles = () => console.log('Browse files')
  
  const handleRemoveFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-8" showsVerticalScrollIndicator={false}>
        {/* Project Image */}
        <View className="items-center mb-8">
          <View className="w-32 h-32 rounded-2xl overflow-hidden relative">
            {/* Building Image Placeholder */}
            <View className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 items-center justify-center">
              <Text className="text-5xl">🏢</Text>
            </View>
            {/* Edit Badge */}
            <View className="absolute bottom-2 right-2 w-8 h-8 bg-[#235DFF] rounded-full items-center justify-center border-2 border-white">
              <Text className="text-white text-base">✎</Text>
            </View>
          </View>
        </View>

        {/* Project Name */}
        <View className="mb-6">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Project Name
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-black pb-3 border-b border-[#235DFF]"
            placeholder="Enter project name"
            placeholderTextColor="#9CA3AF"
            value={formData.projectName}
            onChangeText={(text) => handleInputChange('projectName', text)}
          />
        </View>

        {/* Project Description */}
        <View className="mb-6">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Project Description
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-gray-600 leading-6 pb-3 border-b border-[#235DFF] min-h-[80px]"
            placeholder="Enter project description"
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            value={formData.projectDescription}
            onChangeText={(text) => handleInputChange('projectDescription', text)}
          />
        </View>

        {/* Client Name */}
        <View className="mb-6">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Client Name
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-black pb-3 border-b border-[#235DFF]"
            placeholder="Enter client name"
            placeholderTextColor="#9CA3AF"
            value={formData.clientName}
            onChangeText={(text) => handleInputChange('clientName', text)}
          />
        </View>

        {/* Client Email */}
        <View className="mb-6">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Client Email
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-black pb-3 border-b border-[#235DFF]"
            placeholder="Enter client email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            value={formData.clientEmail}
            onChangeText={(text) => handleInputChange('clientEmail', text)}
          />
        </View>

        {/* Client Phone */}
        <View className="mb-6">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Client Phone
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-black pb-3 border-b border-[#235DFF]"
            placeholder="Enter client phone"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            value={formData.clientPhone}
            onChangeText={(text) => handleInputChange('clientPhone', text)}
          />
        </View>

        {/* Address / Location */}
        <View className="mb-6">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Address / Location
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-gray-600 leading-6 pb-3 border-b border-[#235DFF] min-h-[80px]"
            placeholder="Enter project address"
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
        </View>

        {/* Dates */}
        <View className="flex-row mb-6 gap-5">
          <View className="flex-1">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
              Start Date
            </Text>
            <TextInput
              style={{ fontFamily: 'Urbanist-Regular' }}
              className="text-base text-black pb-3 border-b border-[#235DFF]"
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#9CA3AF"
              value={formData.startDate}
              onChangeText={(text) => handleInputChange('startDate', text)}
            />
          </View>
          <View className="flex-1">
            <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
              End Date
            </Text>
            <TextInput
              style={{ fontFamily: 'Urbanist-Regular' }}
              className="text-base text-black pb-3 border-b border-[#235DFF]"
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#9CA3AF"
              value={formData.endDate}
              onChangeText={(text) => handleInputChange('endDate', text)}
            />
          </View>
        </View>

        {/* Budget Amount */}
        <View className="mb-8">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
            Budget Amount
          </Text>
          <TextInput
            style={{ fontFamily: 'Urbanist-Regular' }}
            className="text-base text-black pb-3 border-b border-[#235DFF]"
            placeholder="Enter budget amount"
            placeholderTextColor="#9CA3AF"
            keyboardType="numeric"
            value={formData.budget}
            onChangeText={(text) => handleInputChange('budget', text)}
          />
        </View>

        {/* Upload Files */}
        <View className="mb-8">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-black mb-5">
            Upload Files
          </Text>
          
          {/* Upload Area - Made Bigger */}
          <TouchableOpacity 
            className="border-2 border-dashed border-[#235DFF] rounded-2xl py-12 items-center justify-center mb-6"
            onPress={handleBrowseFiles}
          >
            <View className="w-16 h-16 bg-white rounded-full items-center justify-center mb-4">
              <Text className="text-2xl">📁</Text>
            </View>
            <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-base text-gray-500">
              Browse files to upload
            </Text>
          </TouchableOpacity>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <>
              <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-4">
                Uploaded
              </Text>
              
              {uploadedFiles.map((file) => (
                <View key={file.id} className="mb-4">
                  <View className="flex-row items-center justify-between mb-2">
                    <View className="flex-row items-center flex-1">
                      <View className={`w-12 h-12 rounded-xl ${file.color} items-center justify-center mr-4`}>
                        <Text className="text-white text-lg">{file.icon}</Text>
                      </View>
                      <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black flex-1">
                        {file.name}
                      </Text>
                    </View>
                    <TouchableOpacity 
                      className="w-7 h-7 rounded-full bg-red-50 items-center justify-center"
                      onPress={() => handleRemoveFile(file.id)}
                    >
                      <Text className="text-red-500 text-sm">✕</Text>
                    </TouchableOpacity>
                  </View>
                  {/* Progress Bar */}
                  <View className="h-2 bg-gray-200 rounded-full overflow-hidden ml-16">
                    <View 
                      className="h-full bg-[#235DFF] rounded-full"
                      style={{ width: `${file.progress}%` }}
                    />
                  </View>
                </View>
              ))}
            </>
          )}
        </View>

        {/* Create Project Button */}
        <TouchableOpacity 
          className="bg-[#235DFF] rounded-xl py-4 items-center mb-14"
          onPress={handleCreateProject}
        >
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-white text-base">
            Create Project
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default CreateProjectScreen