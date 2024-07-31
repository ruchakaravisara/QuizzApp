import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
  return (
    <View>
      <Text>Splash</Text>
      <Pressable onPress={()=>navigation.navigate("Question")}>
        <Text>Go To Questions</Text>
      </Pressable>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})