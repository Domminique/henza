import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
      
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Library",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="create"
            options={{
                title: "My Mood",
                headerShown: false
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Companion",
                headerShown: false
            }}
        />
    </Tabs>
  )
}

export default _layout