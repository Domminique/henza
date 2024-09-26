import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'
import { supabase } from '../lib/supabase'


const SignUp = () => {

  const router = useRouter();

  const emailRef = useRef("")
  const nameRef = useRef("")
  const phoneRef = useRef("")
  const passwordRef = useRef("")

  const[loading, setLoading] = useState(false);


const onSubmit = async() =>{
  if(!emailRef.current || !passwordRef.current || !phoneRef.current || !nameRef.current){
    Alert.alert("Sign Up", "Please fill all the fields");
    return;
  }

  let name = nameRef.current.trim();
  let email = emailRef.current.trim();
  let phonenumber = phoneRef.current.trim();
  let password = passwordRef.current.trim();

  setLoading(true)

  const {data: {session}, error } = await supabase.auth.signUp({
    email, 
    password,
    options:{
      data:{
        name,
        phonenumber
      }

    }
  });
  setLoading(false)

  // console.log("session: ", session)
  // console.log('error: ', error);
  if(error){
    Alert.alert('sign up', error.message)
  }
}


  return (
    <ScreenWrapper bg='white'>
     <StatusBar style='dark ' />
     <ScrollView style={styles.container}>
      <BackButton router={router} />


      {/* Welcome */}

      <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
      </View>

      {/* form */}
      <View style={styles.form}>
      <Text style={{fontSize:hp(1.5), color:theme.colors.text}}>Please fill the details to create an account</Text>

      <Input 
      
      icon={<Icon name="user" size={26} strokeWidth={1.6}/>}
      placeholder="Enter your full name"
      onChangeText={value=>nameRef.current = value}
      />
     
     <Input 
      
      icon={<Icon name="call" size={26} strokeWidth={1.6}/>}
      placeholder="Enter your phonenumber"
      onChangeText={value=>phoneRef.current = value}
      
      />
      <Input 
      
      icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
      placeholder="Enter your email"
      onChangeText={value=>emailRef.current = value}
      />
     
     <Input 
      
      icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
      placeholder="Enter your password"
      onChangeText={value=>passwordRef.current = value}
      secureTextEntry
      />

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      {/* Button */}

      <Button 
      
      title={'Sign Up'} loading={loading} onPress={onSubmit}
      />

      </View>
           {/* footer */}
                 {/* footer */}
      <View style={styles.privacy}>
        <Text style={styles.footerText}>
        By registering you agree to our
        </Text>
        <Pressable onPress={()=>router.push('termsOfUse')}>
        <Text style={[styles.footText,{color:theme.colors.primaryDark, fontWeight:theme.fonts.semibold}]}>
        Terms of Use
        </Text>
        </Pressable>
        <Text>& </Text>
        <Pressable onPress={()=>router.push('privacyPolicy')}>
        <Text style={[styles.footText,{color:theme.colors.primaryDark, fontWeight:theme.fonts.semibold}]}>
        Privacy policy
        </Text>
        </Pressable>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?
        </Text>
        <Pressable onPress={()=>router.push('login')}>
        <Text style={[styles.footerText,{color:theme.colors.primaryDark, fontWeight:theme.fonts.semibold}]}>
          Login
        </Text>
        </Pressable>

      </View>

     </ScrollView>
      
    </ScreenWrapper>
  )
}
export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  welcomeText:{
    fontSize: hp(3),
    fontWeight: theme.fonts.bold, 
    color:theme.colors.text
  },
  form:{
    gap:25,
  },
  forgotPassword:{
    textAlign:'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text

  },
  footer:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    gap:5,
  },
  footerText:{
    textAlign:'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  },
  privacy:{

    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    gap:5,
  },
  footText:{
    textAlign:'center',
    color: theme.colors.text,
    fontSize: hp(1.2)

  }
  

})