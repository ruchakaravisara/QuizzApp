 import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { reactQuestions } from '../config/question'

const Questions = () => {
  const[currentQuestionIndex, setCurrentQuestionIndex] =useState(0)
  return (
    <View>
      <Text>{reactQuestions[currentQuestionIndex].question}</Text>
      {
        reactQuestions.map(item =>
          <View>
            <Text>{item.question}</Text>
          </View>
          
        )
      }
    </View>
  );
}

export default Questions;

const styles = StyleSheet.create({})