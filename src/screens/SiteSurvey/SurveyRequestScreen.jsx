import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const TasksCalendarScreen = () => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Tasks')
  const [selectedView, setSelectedView] = useState('Calendar')
  const [selectedDate, setSelectedDate] = useState(30)

  const tabs = ['Details', 'Tasks', 'Transactions', 'Attendance']
  const views = ['Calendar', 'Activity']

  const stats = [
    { label: 'Completed', count: 110, color: 'bg-emerald-400' },
    { label: 'In Progress', count: 80, color: 'bg-blue-400' },
    { label: 'Ongoing', count: 40, color: 'bg-yellow-400' },
    { label: 'Cancelled', count: 10, color: 'bg-red-400' }
  ]

  const dates = [
    { day: 'Thu', date: 27 },
    { day: 'Fri', date: 28 },
    { day: 'Sat', date: 29 },
    { day: 'Sun', date: 30 },
    { day: 'Mon', date: 31 },
    { day: 'Tue', date: 1 },
    { day: 'Wed', date: 2 }
  ]

  const tasks = [
    {
      id: 1,
      title: 'Onboarding',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      priority: 'High',
      members: ['👤', '👤', '👤', '+10']
    },
    {
      id: 2,
      title: 'Onboarding',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      priority: 'High',
      members: ['👤', '👤', '👤', '+10']
    },
    {
      id: 3,
      title: 'Onboarding',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      priority: 'High',
      members: ['👤', '👤', '👤', '+10']
    },
    {
      id: 4,
      title: 'Onboarding',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      priority: 'High',
      members: ['👤', '👤', '👤', '+10']
    }
  ]

  const handleTabPress = (tab) => setActiveTab(tab)
  const handleAddNew = () => console.log('Add New Task')

  return (
    <View className="flex-1 bg-gray-50">
      {/* Navigation Tabs - Updated style from reference */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        className="mb-5 px-4 pt-4"
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
                className={`text-sm ${
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

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Calendar / Activity Toggle */}
        <View className="flex-row justify-center mb-5">
          {views.map((view) => (
            <TouchableOpacity
              key={view}
              className="px-8"
              onPress={() => setSelectedView(view)}
            >
              <Text
                style={{ fontFamily: 'Urbanist-SemiBold' }}
                className={`text-base pb-2 ${
                  selectedView === view 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-400'
                }`}
              >
                {view}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Calendar View */}
        {selectedView === 'Calendar' && (
          <>
            {/* Stats Grid - Split into two columns with margin */}
            <View className="flex-row flex-wrap mb-5">
              {/* Left Column - Completed & Ongoing */}
              <View className="w-1/2 pr-2">
                <View className="mb-3">
                  <View className="flex-row items-center">
                    <View className="w-3 h-3 bg-emerald-400 rounded-full mr-2" />
                    <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-gray-700">
                      Completed
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-gray-900 ml-1">
                      (110)
                    </Text>
                  </View>
                </View>
                <View className="mb-3">
                  <View className="flex-row items-center">
                    <View className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
                    <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-gray-700">
                      Ongoing
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-gray-900 ml-1">
                      (40)
                    </Text>
                  </View>
                </View>
              </View>
              
              {/* Right Column - In Progress & Cancelled */}
              <View className="w-1/2 pl-2">
                <View className="mb-3">
                  <View className="flex-row items-center">
                    <View className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
                    <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-gray-700">
                      In Progress
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-gray-900 ml-1">
                      (80)
                    </Text>
                  </View>
                </View>
                <View className="mb-3">
                  <View className="flex-row items-center">
                    <View className="w-3 h-3 bg-red-400 rounded-full mr-2" />
                    <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-sm text-gray-700">
                      Cancelled
                    </Text>
                    <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-sm text-gray-900 ml-1">
                      (10)
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Date Selector */}
            <View className="mb-5">
              <View className="flex-row justify-center items-center mb-4">
                <Text className="text-gray-400 text-lg mr-3">‹</Text>
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-lg text-gray-900">
                  March 25
                </Text>
                <Text className="text-gray-400 text-lg ml-3">›</Text>
              </View>

              {/* Date Pills */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-2">
                  {dates.map((item) => (
                    <TouchableOpacity
                      key={item.date}
                      className={`items-center px-4 py-3 rounded-2xl min-w-[60px] ${
                        selectedDate === item.date ? 'bg-blue-600' : 'bg-white'
                      }`}
                      onPress={() => setSelectedDate(item.date)}
                    >
                      <Text
                        style={{ fontFamily: 'Urbanist-SemiBold' }}
                        className={`text-xs mb-1 ${
                          selectedDate === item.date ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {item.day}
                      </Text>
                      <Text
                        style={{ fontFamily: 'Urbanist-Bold' }}
                        className={`text-lg ${
                          selectedDate === item.date ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.date}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Add New Button */}
            <View className="flex-row justify-between items-center mb-4">
              <TouchableOpacity onPress={handleAddNew}>
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-blue-600 text-base">
                  + Add New
                </Text>
              </TouchableOpacity>
              <View className="flex-row items-center bg-white px-4 py-2 rounded-lg">
                <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-gray-600 text-sm mr-2">
                  All Tasks
                </Text>
                <Text className="text-gray-400 text-xs">▼</Text>
              </View>
            </View>

            {/* Task Cards */}
            {tasks.map((task) => (
              <View
                key={task.id}
                className="bg-white rounded-2xl p-4 mb-3 border-l-4 border-blue-600"
              >
                <View className="flex-row justify-between items-start mb-2">
                  <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-gray-900 flex-1">
                    {task.title}
                  </Text>
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-xs text-red-500">
                    {task.priority}
                  </Text>
                </View>

                <Text
                  style={{ fontFamily: 'Urbanist-Regular' }}
                  className="text-sm text-gray-500 leading-5 mb-3"
                >
                  {task.description}
                </Text>

                {/* Members */}
                <View className="flex-row items-center">
                  {task.members.slice(0, 3).map((member, index) => (
                    <View
                      key={index}
                      className={`w-8 h-8 rounded-full bg-gray-300 items-center justify-center border-2 border-white ${
                        index > 0 ? '-ml-2' : ''
                      }`}
                    >
                      <Text className="text-xs">{member}</Text>
                    </View>
                  ))}
                  {task.members[3] && (
                    <View className="ml-2">
                      <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-xs text-blue-600">
                        {task.members[3]}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </>
        )}

        {/* Activity View */}
        {selectedView === 'Activity' && (
          <>
            {/* Date Selector */}
            <View className="mb-5">
              <View className="flex-row justify-center items-center mb-4">
                <Text className="text-gray-400 text-lg mr-3">‹</Text>
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-lg text-gray-900">
                  March 25
                </Text>
                <Text className="text-gray-400 text-lg ml-3">›</Text>
              </View>

              {/* Date Pills */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-2">
                  {dates.map((item) => (
                    <TouchableOpacity
                      key={item.date}
                      className={`items-center px-4 py-3 rounded-2xl min-w-[60px] ${
                        selectedDate === item.date ? 'bg-blue-600' : 'bg-white'
                      }`}
                      onPress={() => setSelectedDate(item.date)}
                    >
                      <Text
                        style={{ fontFamily: 'Urbanist-SemiBold' }}
                        className={`text-xs mb-1 ${
                          selectedDate === item.date ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {item.day}
                      </Text>
                      <Text
                        style={{ fontFamily: 'Urbanist-Bold' }}
                        className={`text-lg ${
                          selectedDate === item.date ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.date}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>

            {/* Add New Button */}
            <View className="flex-row justify-between items-center mb-4">
              <TouchableOpacity onPress={handleAddNew}>
                <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-blue-600 text-base">
                  + Add New
                </Text>
              </TouchableOpacity>
              <View className="flex-row items-center bg-white px-4 py-2 rounded-lg">
                <Text style={{ fontFamily: 'Urbanist-Medium' }} className="text-gray-600 text-sm mr-2">
                  All Tasks
                </Text>
                <Text className="text-gray-400 text-xs">▼</Text>
              </View>
            </View>

            {/* Task Cards */}
            {tasks.map((task) => (
              <View
                key={task.id}
                className="bg-white rounded-2xl p-4 mb-3 border-l-4 border-blue-600"
              >
                <View className="flex-row justify-between items-start mb-2">
                  <Text style={{ fontFamily: 'Urbanist-Bold' }} className="text-base text-gray-900 flex-1">
                    {task.title}
                  </Text>
                  <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-xs text-red-500">
                    {task.priority}
                  </Text>
                </View>

                <Text
                  style={{ fontFamily: 'Urbanist-Regular' }}
                  className="text-sm text-gray-500 leading-5 mb-3"
                >
                  {task.description}
                </Text>

                {/* Members */}
                <View className="flex-row items-center">
                  {task.members.slice(0, 3).map((member, index) => (
                    <View
                      key={index}
                      className={`w-8 h-8 rounded-full bg-gray-300 items-center justify-center border-2 border-white ${
                        index > 0 ? '-ml-2' : ''
                      }`}
                    >
                      <Text className="text-xs">{member}</Text>
                    </View>
                  ))}
                  {task.members[3] && (
                    <View className="ml-2">
                      <Text style={{ fontFamily: 'Urbanist-SemiBold' }} className="text-xs text-blue-600">
                        {task.members[3]}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default TasksCalendarScreen