import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ProjectsScreen = () => {
  const navigation = useNavigation()

  const projects = [
    {
      id: 1,
      name: 'Project Name 1',
      location: '1st Floor - B-12B C Block, Sector 2, Gautam Buddh',
      dueDate: '09 Jan 2026',
      status: 'In Progress',
      statusColor: 'bg-blue-600',
      progress: 40
    },
    {
      id: 2,
      name: 'Project Name 1',
      location: '1st Floor - B-12B C Block, Sector 2, Gautam Buddh',
      dueDate: '07 Mar 2025',
      status: 'Completed',
      statusColor: 'bg-emerald-500',
      progress: 100
    },
    {
      id: 3,
      name: 'Project Name 1',
      location: '1st Floor - B-12B C Block, Sector 2, Gautam Buddh',
      dueDate: '09 Jan 2026',
      status: 'In Progress',
      statusColor: 'bg-blue-600',
      progress: 40
    }
  ]

  const handleAddProject = () => navigation.navigate('CreateProject')
  const handleViewDetails = (projectId) => console.log('View Details:', projectId)
  const handleEditProject = (projectId) => console.log('Edit Project:', projectId)

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        {/* Search Bar with Add Button */}
        <View className="flex-row items-center mb-5">
          <View className="flex-1 bg-white rounded-xl px-4 py-3 flex-row items-center shadow-sm mr-3">
            <Text className="text-gray-400 text-base mr-2">🔍</Text>
            <TextInput
              placeholder="Projects..."
              placeholderTextColor="#9CA3AF"
              className="flex-1 text-sm text-gray-600"
              style={{ fontFamily: 'Urbanist-Regular' }}
            />
          </View>
          <TouchableOpacity 
            className="bg-blue-600 w-12 h-12 rounded-full items-center justify-center shadow-md"
            onPress={handleAddProject}
          >
            <Text className="text-white text-2xl font-light">+</Text>
          </TouchableOpacity>
        </View>

        {/* Project Cards */}
        {projects.map((project) => (
          <View 
            key={project.id}
            className="bg-white rounded-2xl p-4 mb-4 border-l-4 border-blue-600 shadow"
          >
            {/* Header with Image and Title */}
            <View className="flex-row items-start mb-3">
              <View className="w-12 h-12 bg-gray-200 rounded-lg mr-3 items-center justify-center">
                <Text className="text-2xl">🏢</Text>
              </View>
              <View className="flex-1">
                <Text 
                  style={{ fontFamily: 'Urbanist-Bold' }}
                  className="text-base text-black mb-1"
                >
                  {project.name}
                </Text>
                <Text 
                  style={{ fontFamily: 'Urbanist-Regular' }}
                  className="text-xs text-gray-500 leading-4"
                >
                  {project.location}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleEditProject(project.id)}>
                <Text className="text-blue-600 text-xl">✎</Text>
              </TouchableOpacity>
            </View>

            {/* Due Date and Status */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <Text className="text-gray-400 text-sm mr-2">📅</Text>
                <Text 
                  style={{ fontFamily: 'Urbanist-Regular' }}
                  className="text-xs text-gray-500"
                >
                  Due date {project.dueDate}
                </Text>
              </View>
              <View className={`${project.statusColor} px-3 py-1 rounded-full`}>
                <Text 
                  style={{ fontFamily: 'Urbanist-SemiBold' }}
                  className="text-xs text-white"
                >
                  {project.status}
                </Text>
              </View>
            </View>

            {/* Progress Bar */}
            <View className="mb-3">
              <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <View 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </View>
            </View>

            {/* View Details Link */}
            <TouchableOpacity 
              className="flex-row justify-between items-center pt-3 border-t border-gray-100"
              onPress={() => handleViewDetails(project.id)}
            >
              <Text 
                style={{ fontFamily: 'Urbanist-Medium' }}
                className="text-sm text-gray-600"
              >
                View Details
              </Text>
              <Text className="text-gray-400 text-lg">›</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ProjectsScreen