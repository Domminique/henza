import { Alert, Button, Pressable,FlatList, StyleSheet, Text, Image, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { theme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import Icon from '../../assets/icons'
import { useRouter } from 'expo-router'
import Avatar from '../../components/Avatar'
import LocationProvider from '../../components/Location'
import { fetchServices } from '../../services/postService'
import PostCard from '../../components/PostCard'
import ServiceCard from '../../components/ServiceCard'
import Loading from '../../components/Loading'
import getUserData from  '../../services/userService'
import Dashboard from '../../components/Dashboard'
import LibraryCard from '../../components/LibraryCard'
import DefaultImage from '../../assets/images/meditation.jpg';
import DefaultImage1 from '../../assets/images/image2.jpg';
import DefaultImage2 from '../../assets/images/image3.jpg';
import DefaultImage3 from '../../assets/images/image3.jpg';
import  DefaultVideo from '../../assets/images/video2.mp4';
import Input from '../../components/Input'
import { Video } from 'expo-av'

// const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;


var limit = 0;

const services = [
  {
    name: 'Meditation',
    id: 1, 
    tag: 'Create Smart Lists — lists that gather your to-dos based on tags, dates, times, locations, and flags.stores all medical information from allergies and medications to previous surgeries and specialist contact details.',
    image:Image.resolveAssetSource(DefaultImage).uri

  }, 
  {
    name: 'Inspirational messages',
    id:3,
    body:'Easily lighten your load by assigning certain tasks to friends and family. If, for example, you have a work meeting the same day as your father’s radiotherapy treatment, you can assign transportation to your sibling. share important medical appointments and test results.',
    video:DefaultVideo,
    
  }, 
  {
    name: 'Exercise',
    id:2,
    body:'find support groups for all types of cancers , find clinical trials and allows users to input medical records .Chat directly with renowned oncologists and clinical researchers, search for advocacy events based on location and cancer type, join support groups for patients and caregivers based on cancer type.',
    image:Image.resolveAssetSource(DefaultImage1).uri
    
  }, 

  {
    name: 'Healing AI',
    id:2,
    body:'10 music tracks,Four guided meditations 36 pieces of art More than 60 inspirational messages',
    image:'../assets/images/icon.png',
    image:Image.resolveAssetSource(DefaultImage2).uri
    
  }, 
  
]

const Explore = () => {

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
  

  useEffect(() => {

    let postChannel = supabase
    .channel('posts')
    .on('postgres_changes', {event: '*', schema:'public', table:'posts', handlePostEvent})
    .subscribe();

    getPosts();

    return () =>{
      supabase.removeChannel(postChannel);
    }
   
  }, [])
  


  const getPosts = async() =>{
    //call  the api here
    limit = limit + 10;
    let res = await fetchServices(limit);
   if(res.success){
       setPosts(res.data);
   }
  }

  return (
    <ScreenWrapper bg='white'>
   <View style={styles.container}>
    {/* headers */}
   
    <Dashboard />

    
    {/* <View style={{gap:8, padding:10}}>
    <FlatList 
      horizontal={false}
      data={services}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listStyle}
      keyExtractor={item=>item.id.toString()}
      renderItem={({item}) =><PostCard
      item={item}
      currentUser={user}
      router={router} 
      />
  }
    
    />
    </View> */}

    
<View >
<Input 
      
      icon={<Icon name="search" size={26} strokeWidth={1.6}/>}
      placeholder="Find  resources based on your needs"
      onChangeText={value=>emailRef.current = value}
      />
     
    <FlatList 
      data={services}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listStyle}
      keyExtractor={item=>item.id.toString()}
      renderItem={({item}) =><LibraryCard
      item={item}
      currentUser={user}
      router={router} 
      />
  }

  ListFooterComponent={(
    <View style={{marginVertical: posts.length==0? 200: 30}}>
      <Loading />
      
       </View>
  )}
    
    />

</View>
    
    
    </View> 
    <LocationProvider />
      {/* <Button title='logout' onPress={onLogout}></Button> */}
    </ScreenWrapper>
  )
}

export default Explore

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