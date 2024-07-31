import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { reactQuestions } from "../config/question";
import tw from "twrnc";
const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const[selectedOption,setSelectedOption] = useState(null);
  const[isCorrect,setIsCorrect] = useState(null);
  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1){
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex+1);
  };
  const handleOptionPress=(pressedOption)=>{

  }

  return (
    <View style={tw`mt-6 p-4`}>
      <Text style={tw`text-2xl mb-4`}>
        {reactQuestions[currentQuestionIndex].question}
      </Text>
      {reactQuestions[currentQuestionIndex].options.map((option) => (
        <Pressable style={tw`border-2 border-purple-500 p-4 my-2 rounded-md`} onPress={()=>handleOptionPress(option)}>
          <Text style={tw`text-lg`}>{option}</Text>
        </Pressable>
      ))}
      <Pressable style={tw`bg-purple-500 p-4 rounded-md mt-6`} onPress={handleNext}>
        <Text style={tw`text-white text-lg text-center font-bold`}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
