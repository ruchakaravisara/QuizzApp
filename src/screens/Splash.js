import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Splash = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <Image
        source={require("../../assets/questening.png")}
        style={tw.style(tw`h-2.7/5`, { aspectRatio: 1 })}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
