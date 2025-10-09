import { View, Text, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const DashboardScreen = () => {
  const navigation = useNavigation()

  const [activeTab, setActiveTab] = useState('Sites')
  const [selectedProject, setSelectedProject] = useState(null)
  const [projects, setProjects] = useState([])
  const [stats, setStats] = useState({})
  const [activities, setActivities] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)

  const tabs = ['Tasks', 'Transactions', 'Sites', 'Attendance']

  const projectsData = [
    { id: 1, name: 'Project Alpha', status: 'active' },
    { id: 2, name: 'Project Beta', status: 'completed' },
    { id: 3, name: 'Project Gamma', status: 'active' },
    { id: 4, name: 'Project Delta', status: 'pending' },
    { id: 5, name: 'Project Deluxe', status: 'active' },
    { id: 6, name: 'Project Enterprise', status: 'planning' },
    { id: 7, name: 'Project Fusion', status: 'active' },
    { id: 8, name: 'Project Genesis', status: 'completed' },
  ]

  const statsData = {
    totalSurvey: 100,
    pendingSurvey: 10,
    inProgress: 15,
    awaitingApproval: 10,
    approved: 50
  }

  const activitiesData = [
    {
      id: 1,
      project: 'Project Alpha',
      type: 'New Request',
      description: 'John Doe submitted a new request for approval',
      timestamp: '2025-04-01 10:30 AM',
      badgeType: 'new'
    },
    {
      id: 2,
      project: 'Project Beta',
      type: 'Approval',
      description: 'Jane Smith approved the budget proposal',
      timestamp: '2025-04-01 09:15 AM',
      badgeType: 'approval'
    },
    {
      id: 3,
      project: 'Project Gamma',
      type: 'Comment Added',
      description: 'Mark Johnson added a comment: "Please review the latest changes"',
      timestamp: '2025-03-31 04:45 PM',
      badgeType: 'comment'
    }
  ]

  useEffect(() => {
    setProjects(projectsData)
    setSelectedProject(projectsData[0])
    setStats(statsData)
    setActivities(activitiesData)
  }, [])

  const handleTabPress = (tab) => setActiveTab(tab)

  const handleProjectSelect = (project) => {
    setSelectedProject(project)
    setShowDropdown(false)
  }

  const handleViewSurveyReq = () => navigation.navigate('SurveyRequest')
  const handleManageApprovals = () => console.log('Manage Approvals')

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-emerald-500'
      case 'completed': return 'bg-blue-500'
      case 'pending': return 'bg-amber-500'
      case 'planning': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const renderProjectItem = ({ item }) => (
    <TouchableOpacity
      className={`flex-row justify-between items-center py-3 px-2 border-b border-gray-100 rounded-md ${
        selectedProject?.id === item.id ? 'bg-blue-100' : ''
      }`}
      onPress={() => handleProjectSelect(item)}
    >
      <Text
        className={`text-base flex-1 ${
          selectedProject?.id === item.id ? 'text-blue-600 font-semibold' : 'text-black'
        }`}
      >
        {item.name}
      </Text>
      <View className={`px-2 py-1 rounded-xl ${getStatusColor(item.status)}`}>
        <Text className="text-white text-[10px] font-medium">{item.status}</Text>
      </View>
    </TouchableOpacity>
  )

  const getBadgeColor = (type) => {
    switch (type) {
      case 'new': return 'bg-amber-100 text-amber-700'
      case 'approval': return 'bg-emerald-100 text-emerald-700'
      case 'comment': return 'bg-indigo-100 text-indigo-700'
      default: return 'bg-blue-100 text-blue-700'
    }
  }

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        {/* Tabs with Horizontal Scroll - Updated to match SurveyRequestScreen */}
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
                  className={`text-sm font-medium ${
                    activeTab === tab ? 'text-white' : 'text-blue-600'
                  }`}
                  style={{ fontFamily: 'Urbanist-Medium' }}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Project Dropdown */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <Text 
            className="text-base font-semibold text-black mb-2"
            style={{ fontFamily: 'Urbanist-SemiBold' }}
          >
            Project
          </Text>
          <TouchableOpacity
            className="flex-row justify-between items-center border border-gray-200 rounded-lg p-3 bg-white"
            onPress={toggleDropdown}
          >
            <Text 
              className="text-base text-black"
              style={{ fontFamily: 'Urbanist-Regular' }}
            >
              {selectedProject ? selectedProject.name : 'Select Project'}
            </Text>
            <Text className={`text-gray-600 text-xs ${showDropdown ? 'rotate-180' : ''}`}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow">
          <View className="flex-row justify-between mb-4">
            <View className="flex-1 items-start">
              <Text 
                className="text-[10px] text-gray-500 mb-1"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                TOTAL SURVEY
              </Text>
              <Text 
                className="text-2xl font-semibold text-black"
                style={{ fontFamily: 'Urbanist-SemiBold' }}
              >
                {stats.totalSurvey}
              </Text>
            </View>
            <View className="flex-1 items-center">
              <Text 
                className="text-[10px] text-gray-500 mb-1"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                PENDING SURVEY
              </Text>
              <Text 
                className="text-2xl font-semibold text-amber-500"
                style={{ fontFamily: 'Urbanist-SemiBold' }}
              >
                {stats.pendingSurvey}
              </Text>
            </View>
            <View className="flex-1 items-end">
              <Text 
                className="text-[10px] text-gray-500 mb-1"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                IN PROGRESS
              </Text>
              <Text 
                className="text-2xl font-semibold text-blue-500"
                style={{ fontFamily: 'Urbanist-SemiBold' }}
              >
                {stats.inProgress}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between">
            <View className="flex-1 items-start">
              <Text 
                className="text-[10px] text-gray-500 mb-1"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                AWAITING APPROVAL
              </Text>
              <Text 
                className="text-2xl font-semibold text-amber-500"
                style={{ fontFamily: 'Urbanist-SemiBold' }}
              >
                {stats.awaitingApproval}
              </Text>
            </View>
            <View className="flex-1 items-end">
              <Text 
                className="text-[10px] text-gray-500 mb-1"
                style={{ fontFamily: 'Urbanist-Regular' }}
              >
                APPROVED
              </Text>
              <Text 
                className="text-2xl font-semibold text-emerald-500"
                style={{ fontFamily: 'Urbanist-SemiBold' }}
              >
                {stats.approved}
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Activities */}
        <Text 
          className="text-lg font-bold text-black mb-4"
          style={{ fontFamily: 'Urbanist-Bold' }}
        >
          Recent Activities
        </Text>

        {activities.map((activity) => (
          <View
            key={activity.id}
            className="bg-white rounded-xl p-4 mb-4 border-l-4 border-blue-600 shadow"
          >
            <View className="flex-row justify-between items-center mb-2">
              <Text 
                className="text-base font-semibold text-black"
                style={{ fontFamily: 'Urbanist-SemiBold' }}
              >
                {activity.project}
              </Text>
              <View className={`px-3 py-1 rounded-lg ${getBadgeColor(activity.badgeType).split(' ')[0]}`}>
                <Text
                  className={`text-xs font-medium ${
                    getBadgeColor(activity.badgeType).split(' ')[1]
                  }`}
                  style={{ fontFamily: 'Urbanist-Medium' }}
                >
                  {activity.type}
                </Text>
              </View>
            </View>
            <Text 
              className="text-sm text-gray-600 mb-1"
              style={{ fontFamily: 'Urbanist-Regular' }}
            >
              {activity.description}
            </Text>
            <Text 
              className="text-xs text-gray-400 text-right"
              style={{ fontFamily: 'Urbanist-Regular' }}
            >
              {activity.timestamp}
            </Text>
          </View>
        ))}

        {/* Buttons */}
        <View className="flex-row space-x-3 mb-20 mt-2">
          <TouchableOpacity
            className="flex-1 bg-white border border-blue-600 rounded-lg py-3 items-center"
            onPress={handleViewSurveyReq}
          >
            <Text 
              className="text-blue-600 font-semibold text-sm"
              style={{ fontFamily: 'Urbanist-SemiBold' }}
            >
              View Survey Req
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-blue-600 rounded-lg py-3 items-center"
            onPress={handleManageApprovals}
          >
            <Text 
              className="text-white font-semibold text-sm"
              style={{ fontFamily: 'Urbanist-SemiBold' }}
            >
              Manage Approvals
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Project Dropdown Modal */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-center items-center p-5"
          activeOpacity={1}
          onPress={() => setShowDropdown(false)}
        >
          <View className="bg-white rounded-xl p-4 w-[90%] max-h-[70%] shadow-lg">
            <Text 
              className="text-lg font-semibold text-black mb-4 text-center"
              style={{ fontFamily: 'Urbanist-SemiBold' }}
            >
              Select Project
            </Text>
            <FlatList
              data={projects}
              renderItem={renderProjectItem}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default DashboardScreen