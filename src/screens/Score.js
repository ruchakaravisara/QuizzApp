import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "twrnc";
import { useRoute } from "@react-navigation/native";

const Score = ({ navigation }) => {
  const route = useRoute();
  const { score } = route.params;

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Image
        source={require("../../assets/questening.png")}
        style={tw.style(tw`h-2.7/5`, { aspectRatio: 1 })}
      />
      <Text style={tw`text-2xl font-bold mt-4`}>
        Congratulations! You scored {score} points
      </Text>

      <Pressable
        style={tw`bg-green-500 p-4 rounded-md mt-6`}
        onPress={() => navigation.navigate("Splash")}
      >
        <Text style={tw`text-white font-medium text-lg`}>Play Again</Text>
      </Pressable>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({});
