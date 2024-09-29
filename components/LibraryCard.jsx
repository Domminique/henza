import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { actions } from 'react-native-pell-rich-editor'
import { theme } from '../constants/theme'
import { hp, stripHTMLTags, wp } from '../helpers/common'
import Avatar from './Avatar'
import moment from 'moment'
import Icon from '../assets/icons'
import RenderHtml from 'react-native-render-html';
import { getSupabaseFileUrl } from '../services/imageService'
import { Image } from 'expo-image'
import { Video } from 'expo-av'


const textStyles = {
    div: {
        color: theme.colors.dark,
        fontSize: hp(1.75)
    }
}

const tagsStyles = {
    div: textStyles,
    p: textStyles,
    ol:textStyles,
    h1: {
        color:theme.colors.dark
    },
    h4: {
        color:theme.colors.dark
    }
}

const LibraryCard = ({
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


const openLibraryDetails = ()=>{
    if(!showMoreIcon) return null;
    router.push({pathname:'libraryDetails', params: item})

}


const onShare = async() =>{
    let content = { message:stripHTMLTags(item?.body)}
    Share.share(content);
}

    const createdAt = moment(item?.created_at).format('MMM D')
    const liked = false
    const likes = []
  return (
    <View style={[styles.container, hasShadow && shadowStyles]}>
        <View style={styles.header}>

        {/* User info and post time */}
     <View style={styles.userInfo}>
        <Avatar
        size={hp(4.5)}
        uri={item?.user?.image}
        rounded={theme.radius.md}
        />
        <View style={{gap:2}}>
            <Text style={styles.username}>{item?.name}</Text>
            <Text style={styles.postTime}>{createdAt}</Text>
        </View>
     </View>

     {

        showMoreIcon && ( 
            <TouchableOpacity onPress={openLibraryDetails}>

            <Icon name="threeDotsHorizontal" size={hp(3.4)} strokeWidth={3} color={theme.colors.text} />
         </TouchableOpacity>
        )
     }

    
    </View>

    {/* post body */}

    <View style={styles.content}>
        <View style={styles.postBody}>
            {
                item?.body && (
                    // <RenderHtml 
                    // contentWidth={wp(100)}
                    // source={{html:item?.body}}
                    // tagsStyles={tagsStyles}
                    // /> 
                    <Text style={styles.tagsStyles}>{item?.body}</Text>
                    
                )
            }

        </View>

        {/* Post image */}

        {
            item?.image&& (
                <Image
                source={item?.image}
            
                style={styles.postMedia}
                contentFit='cover'
                />

            )
        }

         {/* Post Video */}

         {

            item?.video && (
          <Video
             style={[styles.video, {height:hp(30)}]}
             source={item?.video}
             useNativeControls
             isLopping
    
    />
)
}
    </View>
    {/* {Book, wishlist, share} */}
    <View style={styles.footer}>
        <View style={styles.footerButton}>
            <TouchableOpacity onPress={openLibraryDetails }>
                <Icon name="call" colors={24} fill={liked? theme.colors.rose:'transparent'}
                 color={liked? theme.colors.rose: theme.colors.textLight} />
            </TouchableOpacity>

            {/* <Text style={styles.count}>
                {

                    likes?.length
                }


            </Text> */}

        </View>
        <View style={styles.footerButton} >
            <TouchableOpacity onPress={openLibraryDetails }>
                <Icon name="appointment" colors={24}   color={ theme.colors.textLight} />
            </TouchableOpacity>

            {/* <Text style={styles.count}>
                {

                    likes?.length
                }


            </Text> */}

        </View>
        <View style={styles.footerButton}>
            <TouchableOpacity onPress={openLibraryDetails }>
                <Icon name="share" colors={24} color={theme.colors.textLight} />
            </TouchableOpacity>

        

        </View>
        <View style={styles.footerButton}>
            <TouchableOpacity>
                <Icon name="heart" colors={24} color={theme.colors.textLight} />
            </TouchableOpacity>

        

        </View>
        <View style={styles.footerButton}>
            <TouchableOpacity onPress={openLibraryDetails }>
                <Icon name="comment" colors={24} color={theme.colors.textLight} />
            </TouchableOpacity>

        

        </View>

    </View>
    </View>
  )
}

export default LibraryCard
const styles = StyleSheet.create({


// missing
container: {
    gap: 10,
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
    fontSize: hp(1.7),
    color: theme.colors.textDark,
    fontWeight: theme.fonts.medium,

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
},
video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },




})




