import { View, Text, Image } from 'react-native'
import React from 'react'
import imagePath from "@/src/constants/imagePath"

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Image source={imagePath.react_logo} />
    </View>
  )
}