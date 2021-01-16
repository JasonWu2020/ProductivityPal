import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ScheduleScreen(props){
    return (
        <View style = {styles.container}>
            <Text>This is our Schedule Screen!</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column"
    },

    register: {
        display: "flex",
        flexDirection: "row",
        width: "70%"
    },

    registerInput: {
        borderWidth: 1,
        borderColor: "black",
        width: "70%"
    }
  });