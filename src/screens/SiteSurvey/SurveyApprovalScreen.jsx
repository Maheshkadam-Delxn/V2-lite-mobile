import { View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const SurveyApprovalScreen = () => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Sites')
  const [showApproveModal, setShowApproveModal] = useState(false)
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [rejectReason, setRejectReason] = useState('')

  const tabs = ['Tasks', 'Transactions', 'Sites', 'Attendance']

  const surveyDetail = {
    requestId: 'SRQ - 001',
    projectName: 'Project Alfa',
    date: '10 Jan 2024',
    type: 'Safety',
    description: 'New survey request submitted. Employee Satisfaction Survey Q2 2025 for review.',
    assignedTo: {
      role: 'Contractor',
      name: 'Mr. Ahmed Al-Farsi',
      avatar: '👤'
    },
    attachments: [
      { id: 1, name: 'Website-templates.psd', size: '2.3 MB', icon: '📄', color: 'bg-blue-500' },
      { id: 2, name: 'Logo-vector.ai', size: '1.5 MB', icon: '📄', color: 'bg-red-500' },
      { id: 3, name: 'Wireframe for team.figma', size: '3.7 MB', icon: '🎨', color: 'bg-purple-500' }
    ],
    approvalHistory: [
      { id: 1, text: 'Submitted by Contractor A on 20-03-2025.' },
      { id: 2, text: 'Rejected By Admin on 26-03-2025 With Reason "Incomplete Data".' },
      { id: 3, text: 'Approved By Admin on 29-03-2025.' }
    ]
  }

  const handleTabPress = (tab) => setActiveTab(tab)
  const handleReject = () => setShowRejectModal(true)
  const handleApprove = () => setShowApproveModal(true)
  const handleConfirmApprove = () => {
    console.log('Survey Approved')
    setShowApproveModal(false)
    navigation.navigate('NewSurvey')

  }
  const handleConfirmReject = () => {
    console.log('Survey Rejected with reason:', rejectReason)
    setShowRejectModal(false)
    setRejectReason('')
  }
  const handleCancelApprove = () => setShowApproveModal(false)
  const handleCancelReject = () => {
    setShowRejectModal(false)
    setRejectReason('')
  }
  const handleAttachmentPress = (attachment) => console.log('Open:', attachment.name)

  return (
    <View className="flex-1 bg-gray-100" style={{ fontFamily: 'Urbanist' }}>
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

        {/* Header Card */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <View className="flex-row justify-between items-center">
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-base text-black">Project Alfa</Text>
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-base text-black">{surveyDetail.requestId}</Text>
          </View>
        </View>

        {/* General Information */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-black mb-2">General Information</Text>
          
          <View className="mt-2">
            <View className="flex-row justify-between items-center py-2">
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500">Request ID</Text>
              <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black">{surveyDetail.requestId}</Text>
            </View>
            <View className="h-px bg-gray-200" />
            
            <View className="flex-row justify-between items-center py-2">
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500">Project Name</Text>
              <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black">{surveyDetail.projectName}</Text>
            </View>
            <View className="h-px bg-gray-200" />
            
            <View className="flex-row justify-between items-center py-2">
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500">Date</Text>
              <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black">{surveyDetail.date}</Text>
            </View>
            <View className="h-px bg-gray-200" />
            
            <View className="flex-row justify-between items-center py-2">
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500">Type</Text>
              <View className="bg-blue-100 px-4 py-1 rounded-full">
                <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-xs text-blue-700">{surveyDetail.type}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-black mb-2">Description</Text>
          <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-600 leading-5 mt-2">{surveyDetail.description}</Text>
        </View>

        {/* Assigned To */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-black mb-2">Assigned To</Text>
          <View className="flex-row items-center mt-2">
            <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500 mr-auto">{surveyDetail.assignedTo.role}</Text>
            <View className="flex-row items-center">
              <View className="w-6 h-6 rounded-full bg-gray-300 items-center justify-center mr-2">
                <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-xs">{surveyDetail.assignedTo.avatar}</Text>
              </View>
              <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black">{surveyDetail.assignedTo.name}</Text>
            </View>
          </View>
        </View>

        {/* Attachments */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-black mb-2">Attachments</Text>
          <View className="mt-2">
            {surveyDetail.attachments.map((attachment, index) => (
              <TouchableOpacity
                key={attachment.id}
                className={`flex-row items-center justify-between py-3 ${
                  index !== surveyDetail.attachments.length - 1 ? 'border-b border-gray-100' : ''
                }`}
                onPress={() => handleAttachmentPress(attachment)}
              >
                <View className="flex-row items-center flex-1">
                  <View className={`w-10 h-10 rounded-lg ${attachment.color} items-center justify-center mr-3`}>
                    <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-white text-lg">{attachment.icon}</Text>
                  </View>
                  <View className="flex-1">
                    <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-black" numberOfLines={1}>
                      {attachment.name}
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-xs text-gray-500">{attachment.size}</Text>
                  </View>
                </View>
                <View className="w-8 h-8 rounded-full bg-blue-50 items-center justify-center">
                  <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-blue-600 text-lg">→</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Approval History */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-black mb-2">Approval History</Text>
          <View className="mt-2">
            {surveyDetail.approvalHistory.map((history) => (
              <View key={history.id} className="flex-row mb-1">
                <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-gray-500 mr-2">•</Text>
                <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-600 flex-1 leading-5">{history.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity
            className="flex-1 rounded-lg py-3 items-center"
            style={{ backgroundColor: '#F7555510' }}
            onPress={handleReject}
          >
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-red-500 text-sm">Reject</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-emerald-500 rounded-lg py-3 items-center"
            onPress={handleApprove}
          >
            <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-sm">Approve</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Approve Confirmation Modal */}
      <Modal visible={showApproveModal} transparent animationType="slide">
        <TouchableOpacity 
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={handleCancelApprove}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <View className="bg-white rounded-t-3xl p-8 min-h-[280px] justify-center">
              <Text style={{ fontFamily: 'Urbanist-Bold', fontWeight: '700' }} className="text-2xl text-black text-center mb-6">
                Approve Survey
              </Text>
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-base text-gray-600 text-center mb-8 leading-6">
                Are you sure you want to Approve
                {'\n'}
                this Survey?
              </Text>
              
              <View className="flex-row gap-4">
                <TouchableOpacity
                  className="flex-1 rounded-xl py-4 items-center"
                  style={{ backgroundColor: '#F7555510' }}
                  onPress={handleCancelApprove}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-red-500 text-base">Reject</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 bg-emerald-500 rounded-xl py-4 items-center"
                  onPress={handleConfirmApprove}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-base">Approve</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Reject Modal */}
      <Modal visible={showRejectModal} transparent animationType="slide">
        <TouchableOpacity 
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={handleCancelReject}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <View className="bg-white rounded-t-3xl p-8">
              <Text style={{ fontFamily: 'Urbanist-Bold', fontWeight: '700' }} className="text-2xl text-black text-center mb-4">
                Reject Survey
              </Text>
              <Text style={{ fontFamily: 'Urbanist-Regular' }} className="text-sm text-gray-500 text-center mb-6">
                Enter Reason for Rejection
              </Text>
              
              {/* Reject Reason Input */}
              <View className="mb-6">
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-black mb-3">
                  Reject Reason
                </Text>
                <TextInput
                  style={{ fontFamily: 'Urbanist-Regular' }}
                  className="bg-gray-50 rounded-xl p-4 text-sm text-gray-900 min-h-[120px]"
                  placeholder="Enter the Reason"
                  placeholderTextColor="#9CA3AF"
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  value={rejectReason}
                  onChangeText={setRejectReason}
                />
              </View>
              
              <View className="flex-row gap-4">
                <TouchableOpacity
                  className="flex-1 rounded-xl py-4 items-center"
                  style={{ backgroundColor: '#F7555510' }}
                  onPress={handleCancelReject}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-red-500 text-base">Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-1 bg-emerald-500 rounded-xl py-4 items-center"
                  onPress={handleConfirmReject}
                >
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-white text-base">Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default SurveyApprovalScreen