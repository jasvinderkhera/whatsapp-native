import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from "expo-router"

export default function RootNavigation() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
    </Stack>
  )
}