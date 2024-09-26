import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { actions } from 'react-native-pell-rich-editor'
import { theme } from '../constants/theme'
import { hp, wp } from '../helpers/common'
import Avatar from './Avatar'
import moment from 'moment'
import Icon from '../assets/icons'
import RenderHtml from 'react-native-render-html';
import { Video } from 'expo-av'

const PostCard = ({
    item,
    currentUser,
    router,
    hasShadow = true,
    showMoreIcon = true,
}) => {
    const shadowStyles = {
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 1
    }


const openServiceDetails = ()=>{
    if(!showMoreIcon) return null;
    router.push({pathname:'serviceDetails', params: {postId: item?.name}})


}

    const createdAt = moment(item?.created_at).format('MMM D')
  return (
    <Pressable style={[styles.container, hasShadow && shadowStyles]} onPress={openServiceDetails}>
        <View style={styles.header}>

        {/* User info and post time */}
     <View style={styles.userInfo}>
        <Avatar
        size={hp(6.5)}
        uri={item?.image}
        rounded={theme.radius.md}
        />
        <View style={{gap:4}}>
            <Text style={styles.username}>{item?.name}</Text>
            {/* <Text style={styles.postTime}>{createdAt}</Text> */}
            <Text style={styles.postTime}> 5km around you</Text>
        </View>
     </View>

     {/* <TouchableOpacity onPress={openServiceDetails}>

        <Icon name="threeDotsHorizontal" size={hp(3.4)} strokeWidth={3} color={theme.colors.text} />
     </TouchableOpacity> */}
    </View>

    {/* post body */}

    <View style={styles.content}>
        <View style={styles.postBody}>
            {
                item?.body && (
                    <RenderHtml 
                    contentWidth={wp(100)}
                    transition={100}
                    source={{html:item?.body}}
                    /> 
                    
                )
            }

            {/* Post Video */}

            {

                item?.file && item?.file?.includes('postVideos') && (
                    <Video 
                    style={[styles.postMedia, {height:hp(30)}]}
                    
                    />
                )
            }

        </View>
    </View>
    </Pressable >
  )
}

export default PostCard

const styles = StyleSheet.create({


// missing
container: {
    gap: 15,
    marginBottom: 15,
    borderRadius: theme.radius.xxl*1.1,
    borderCurve: 'continuous',
    padding: 10,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: theme.colors.gray,
    shadowColor: '#000'

},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
},
userInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
},
username:{
    fontSize: hp(2),
    color: theme.colors.textDark,
    fontWeight: theme.fonts.extraBold,

},
postTime: {
    fontSize: hp(1.4),
    color: theme.colors.textLight,
    fontWeight: theme.fonts.medium
},
content: {
    gap:10
},

postMedia:{
    height: hp(40),
    width: '100',
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous'

},
postBody: {
    marginLeft: 5,
    
},
footer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:15
},
footerButton: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap:4
},
actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:18
},
count: {
    color: theme.colors.text,
    fontSize: hp(1.8)
}




})