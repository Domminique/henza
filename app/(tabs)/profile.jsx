import * as Linking  from 'expo-linking';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../helpers/common';
import { theme } from '../../constants/theme';

const Chat = () => {
    Linking.openURL('https://henza.netlify.app');
  return (
    <View style={[styles.center, {justifyContent: 'flex-start', marginTop:100 }]}>
    <Text style={styles.notFound}> Feeling isolated and overwhelmed can be a common experience for cancer patients.</Text>

  </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor:'white',
      paddingVertical: wp(7)
    },
    inputContainer: {
      flexDirection:'row',
      alignItems: 'center',
      gap: 10
    },
    list:{
      paddingHorizontal: wp(4)
    },
  sendIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    borderCurve: 'continous',
    height: hp(5.8),
    width: hp(5.8)
  },
  center:{
    flex: 1, 
    alignItems:'center',
    justifyContent: 'center'
  
  },
  notFound:{
    fontSize: hp(2.5),
    color: theme.colors.text,
    fontWeight: theme.fonts.medium,
  
  },
  loading: {
    height: hp(5.8),
    width: hp(5.8),
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scale: 1.3}]
  }
  
    
  })