import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function  Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> My Todos</Text>
        </View>
    )

}

const styles = StyleSheet.create({
  header : {
    backgroundColor :'coral',
    height:150 , 
    paddingTop : 38,
    width : 450
  }, 
  title : {
    textAlign :  'center' , 
    color : '#fff' , 
    fontSize : 40 , 
    fontWeight :'bold'
  }
});