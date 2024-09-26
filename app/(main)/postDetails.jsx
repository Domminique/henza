import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { createConsultation, fetchServicesDetails } from '../../services/postService'
import { theme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import { ScrollView } from 'react-native'
import ServiceCard from '../../components/ServiceCard'
import User from '../../assets/icons/User'
import { useAuth } from '../../contexts/AuthContext'
import Loading from '../../components/Loading'
import Input from '../../components/Input'
import { TouchableOpacity } from 'react-native'
import Icon from '../../assets/icons'
import { Alert } from 'react-native'

const PostDetails = () => {
    const {postId} = useLocalSearchParams()
    const { user} = useAuth();
    const router = useRouter();
    const [startLoading, setStartLoading] = useState(true)
    const inputRef = useRef(null)
    const consultationRef = useRef(null)
    const timeDateRef = useRef(null)

    const [loading, setLoading] = useState(false)

    const [post, setPost] = useState(null)


    useEffect(() => {
        getPostDetails();
     
    }, [])

    const getPostDetails = async()=>{
      // fetch service details here

      let res = await fetchServicesDetails(postId)
      if(res.success) setPost(res.data);
      setStartLoading(false);

        
    }

    const onNewCommen = async() =>{

      if(!consultationRef.current) return null;
      let data = {
        userId: user?.id, 
        postId: post?.id,
        text: consultationRef.current
      }

      // create comment
      setLoading(true)

      let res = await createConsultation(data)


      setLoading(true)

      if(res.success){
        // send notification

        inputRef?.current?.clear()
        consultationRef.current= '';

        
      }else{
        Alert.alert('Consultation', res.msg);
      }

    }

    if(startLoading){
      return (
        <View style={styles.center}>
          <Loading />
    
        </View>
      )
    }

    if(!post){
      return(
        <View style={[styles.center, {justifyContent: 'flex-start', marginTop:100 }]}>
          <Text style={styles.notFound}>service not found</Text>

        </View>
      )
    }
    
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
      <ServiceCard 
      item={post}
      currentUser={user}
      router={router}
      hasShadow={false}
      showMoreIcon ={false}

      />

      {/* Consultation input */}

      <View style={styles.inputContainer}>
      <Input
      placeholder="Type your consultation request"
      onChangeText={value => consultationRef.current = value}
      placeholderTexxtColor= {theme.colors.textLight}
      multiline={true}
      containerStyle={{flex: 1, height: hp(15), borderRadius: theme.radius.xl}}
      />

     

     {

      loading? (
        <View style={styles.loading}> 
        
        <Loading size='small'/>
        </View>


      ):(

        <TouchableOpacity style={styles.sendIcon} onPress={onNewCommen}>
        <Icon name='send' color={theme.colors.primaryDark}/>
      </TouchableOpacity>

      )
     }
      </View>

     


      </ScrollView>

    </View>
  )
}

export default PostDetails

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
},
bio: {
  flexDirection: 'row', 
  height: hp(15),
  alignItems: 'flex-start',
  paddingVertical:15
}

  
})