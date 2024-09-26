import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcome = () => {

  const router = useRouter();


  return (
    <ScreenWrapper bg="white">
      <StatusBar style='dark' />
      <View style={styles.container}>
        {/* { welcome images} */}

        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/medical1.png')}/>

        {/* Title */}


        <View style={{gap: 20}}>
           <Text style={styles.title}>Henza</Text>
           <Text style={styles.punchline}>Making the journey to recovery slightly less scary</Text>
        </View>

        {/* footer */}

        <View style={styles.footer}>
          <Button 
          title='Getting Started'
          buttonStyle={{marginHorizontal: wp(3)}}
          onPress={()=>router.push('signUp')}

          />

          <View style={styles.bottomTextContainer}>

          <Text style={styles.loginText}>Already have an account!</Text>

          <Pressable  onPress={()=>router.push('login')}>
          <Text style={[styles.loginText, {color:theme.colors.primary, fontWeight:theme.fonts.semibold}]}>Login</Text>
          </Pressable>
          </View>

        </View>

      </View>
   
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor:'white',
    paddingHorizontal: wp(4)
  },
  welcomeImage:{
  height: hp(50),
  width:wp(120),
  alignSelf:'center'    

  },
  title:{
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  punchline:{
    color: theme.colors.text,
    fontSize: hp(2),
    textAlign: 'center',
    paddingHorizontal:wp(10)
  },

  footer:{
    gap: 30, 
    width: '100%'
  },
  bottomTextContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap: 5
  },
  loginText: {
    textAlign: 'center',
    color:theme.colors.text,
    fontSize:hp(1.6)
  }

}) 