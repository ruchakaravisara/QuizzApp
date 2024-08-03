import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Splash = ({ navigation }) => {
  return (
    <View style={tw`flex-1  items-center`}>
      <Image
        source={require("../../assets/questening.png")}
        style={tw.style(tw`h-2.7/5`, { aspectRatio: 1 })}
      />
      <Text style={tw`text-2xl text-center mb-10`}>Instructions</Text>
      <View style={tw`bg-green-500 p-2 rounded h-30 w-80 items-center justify-center`}>
        <Text style={tw`text-white text-lg`}>Each Quiz has Four Options</Text>
        <Text style={tw`text-white text-lg`}>
          Progress Will be Shown at Top
        </Text>
        <Text style={tw`text-white text-lg`}>
          Score Would be Shown At The End
        </Text>
      </View>
      <Pressable style={tw`bg-green-500 mt-10 px-6 py-1 rounded`} onPress={()=>navigation.navigate("Question")}>
        <Text style={tw`text-white text-lg`}>Start</Text>
      </Pressable>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
