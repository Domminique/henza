import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import { useAuth } from '../contexts/AuthContext'
import Icon from '../assets/icons'
import Avatar from './Avatar'

const Dashboard = () => {
    const router = useRouter()
  const {user,setAuth} = useAuth()

  const [posts, setPosts] = useState([]);

  const handlePostEvent = async(payload) =>{
     if(payload.eventType =='INSERT' && payload?.new?.id){
      let newPost = { ...payload.new};
      let res = await getUserData(newPost.userId)
      newPost.user = res.success? res.data: {}
      setPosts(prevPosts =>[newPost, ...prevPosts])

     }
  }
  

  return (
    <View style={styles.header}>
    <Text style={styles.title}>Henza</Text>
    <View style={styles.icons}>
    <Pressable onPress={()=>router.push('chat')}>
        <Icon name="comment" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
      </Pressable>
      <Pressable onPress={()=>router.push('notifications')}>
        <Icon name="notification" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
      </Pressable>
      <Pressable onPress={()=>router.push('newPost')}>
        <Icon name="plus" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
      </Pressable>
      <Pressable onPress={()=>router.push('settings')}>
      <Avatar 
      uri={user?.image}
      size={hp(4.3)}
      rounded={theme.radius.sm}
      style={{borderWith:2}}/>
      </Pressable>
    </View>
  </View>

  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
      flex: 1,
      //paddingHorintal: wp(4)
    },
    nearby:{
      color: theme.colors.text,
      fontSize: hp(2.2),
      fontWeight: theme.fonts.bold,
      paddingLeft: 30,
      padding:5
    }, 
    header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:10,
      marginHorizontal:wp(4)
    },
    title:{
      color: theme.colors.text,
      fontSize: hp(3.2),
      fontWeight: theme.fonts.bold
  
    },
    avatarImage:{
      height:hp(4.3),
      width: hp(4.3),
      borderRadius: theme.radius.sm,
      borderCurve: 'continuous',
      borderColor: theme.colors.gray,
      borderWith:3
  
    },
    icons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
      gap:18
    },
  
    listStyle:{
      paddingTop: 20,
      paddingHorizontal: wp(4),
  
    },
    noPosts:{
      fontSize:hp(2),
      textAlign:'center',
      color: theme.colors.text
  
    },
    pill:{
      position: 'absolute',
      right: -10,
      top:-4,
      height:hp(2.2),
      width:hp(2.2),
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:20,
      backgroundColor:theme.colors.roseLight
    },
    pillText: {
      color: 'white',
      fontSize: hp(1.2),
      fontWeight:theme.fonts.bold
    },
  
  })