import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchServicesDetails } from '../../services/postService'
import { theme } from '../../constants/theme'
import { hp, wp } from '../../helpers/common'
import { ScrollView } from 'react-native'
import ServiceCard from '../../components/ServiceCard'
import User from '../../assets/icons/User'
import { useAuth } from '../../contexts/AuthContext'
import Loading from '../../components/Loading'
import PostCard from '../../components/PostCard'

const post = [
  
]

const ServiceDetails = () => {
  const {postId} = useLocalSearchParams()
    const { user} = useAuth();
    const router = useRouter();
    const [startLoading, setStartLoading] = useState(false)
    console.log('got post Id',postId )

    

    // if(startLoading){
    //   return (
        
    //     <View style={styles.center}>
    //       <Loading />
    
    //     </View>
    //   )
    // }

    if(!post){
      return(
        <View style={[styles.center, {justifyContent: 'flex-start', marginTop:100 }]}>
          <Text style={styles.notFound}>{postId} not found</Text>

        </View>
      )
    }
    
  return (
    // <View style={styles.container}>
    //   <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
    //   <PostCard
    //   item={item}
    //   currentUser={user}
    //   router={router}
    //   hasShadow={false}
    //   showMoreIcon ={false}
    //   />


    //   </ScrollView>

    // </View>
    <View style={[styles.center, {justifyContent: 'flex-start', marginTop:100 }]}>
    <Text style={styles.notFound}>{postId} not found</Text>

  </View>
  )
}

export default ServiceDetails

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