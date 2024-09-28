import { StyleSheet,ScrollView , Text, View, Image, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'
import { useAuth } from '../../contexts/AuthContext'
import RichTextEditor from '../../components/RichTextEditor'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import Icon from '../../assets/icons'
import Button from '../../components/Button'
import * as ImagePicker from 'expo-image-picker';
import { getSupabaseFileUrl } from '../../services/imageService'
import { Video } from 'expo-av'
import { createOrUpdateService } from '../../services/postService'



const NewPost = () => {

  const { user} = useAuth();
  const bodyRef = useRef("")
  const editorRef = useRef(null)
  const router = useRouter()
  const [ loading, setLoading] = useState(false)
  const [file, setFile] = useState(file)
  const [verified, setVerified] = useState(false)

  // console.log(bodyRef)


  const onPick = async(isImage) =>{
    let mediaConfig = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,

    }
    if(!isImage){
      mediaConfig ={
        mediaTypes:ImagePicker.MediaTypeOptions.Videos,
        allowsEditing:true
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync(mediaConfig);

    if(!result.canceled){
      setFile(result.assets[0])
    }

  }

  const isLocalFile =() =>{
    if(!file) return null
    if(typeof file == 'object') return true;
    
  }

  const  getFileType= file =>{
    if(!file) return null
    if(isLocalFile(file)){
      return file.type;
    }
    // check for remote files

    if(file.includes('postImages')){
      return 'image'
    }
    return 'video';
  }


  const  getFileUri= file =>{
    if(!file) return null
    if(isLocalFile(file)){
      return file.uri
    }
    return getSupabaseFileUrl(file)?.uri;
 
  }


  const onSumbit = async() =>{
    if(!bodyRef.current || !file ){
      Alert.alert('Add Service', "Please choose an image or add service body")
      return;
    }

    let data = {
      file, 
      body: bodyRef.current,
      userId: user?.id,

    }

    // console.log("post data",data)

    // Create Service
      setLoading(true);

      if(!verified){
        Alert.alert('Verification', "You are not verified as a  health care service provider to list your service(s)on Henza.Please get verified to continue")
        router.back()
        return;

        
      }
      
      let res = await createOrUpdateService(data) 
      setLoading(false);
      // console.log('Posts res ', res)


      if(res.success){
        setFile(null);
        bodyRef.current=""
        editorRef.current?.setContentHTML('')
        router.back()
      } else{
        Alert.alert('Add service', res.msg)
      }





  }
  
  return (
    <ScreenWrapper bg="white">
     <View style={styles.container}>
     <Header title='Create service'/>
     <ScrollView contentContainerStyle={{gap:20}} >
      {/* avatar */}

      <View style={styles.header}>
        <Avatar
        uri={user?.image}
        size={hp(6.5)}
        rounded={theme.radius.xl} />
        <View style={{gap:2}}>
          <Text style={styles.username}>

            {
              user && user.name
            }
          </Text>
          <Text style={styles.publicText}>
            Health Service Provider

          </Text>

        </View>

      </View>

      <View style={styles.textEditor}>

           <RichTextEditor editorRef={editorRef} onChange={body => bodyRef.current = body}/>
      </View>

      {

        file && (
          <View style={styles.file}>
              {

                getFileType(file) == 'video' ? (

                 <Video 
                 
                 style={{flex: 1}}
                 source={{
                  uri:getFileUri(file)
                 }}
                 useNativeControls
                 resizeMode='cover'
                 isLooping
                 />


                ):(
                <Image source={{uri: getFileUri(file)}} resizeMode = 'cover' style={{flex:1}} />

                )
              }

              <Pressable style={styles.closeIcon} onPress={()=>setFile(null)}>
                <Icon name="delete" size={22} color="white" />

              </Pressable>

          </View>
        )
      }

      <View style={styles.media}>
        <Text style={styles.addImageText}>Add to your services</Text>
        <View style={styles.mediaIcons}>
           <TouchableOpacity onPress={()=>onPick(true)} >
            <Icon name='image' size={30} color={theme.colors.dark} />
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>onPick(false)} >
            <Icon name='video' size={20} color={theme.colors.dark} />
           </TouchableOpacity>

        </View>

      </View>
     </ScrollView>
     <Button 
     buttonStyle={{height:hp(6.2)}}
     title='Add service'
     loading={loading}
     hasShadow={false}
     onPress={onSumbit}
     /> 
    </View>
    </ScreenWrapper>
  )
}

export default NewPost

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap:15,
  },
  title:{
    fontSize:hp(2.5),
    fontWeight: theme.fonts.semibold,
    color:theme.colors.text,
    textAlign: 'center'

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:12

  },
  username: {
    fontSize: hp(2.2),
    fontWeight:theme.fonts.semibold,
    color: theme.colors.text,
  },

  avatar: {
    height: hp(6.5),
    width: hp(6.5),
    borderRadius: theme.radius.xl,
    borderCurve: 'continuous',
    borderWidth: 1,
    borderColor:'rgba(0,0,0,1)'

  },
  publicText: {
    fontSize: hp(1.7),
    fontWeight: theme.fonts.medium,
    color: theme.colors.textLight,
  },
  textEditor:{

  },
  media:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderWidth: 1.5,
    padding: 12,
    paddingHorizontal:18,
    borderRadius: theme.radius.xl,
    borderCurve:'continuous',
    borderColor: theme.colors.gray
  },
  mediaIcons:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  addImageText: {
    fontSize: hp(1.9),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,

  },
  imageIcon: {

    borderRadius: theme.radius.md,

  },
  file: {
    height: hp(30),
    width: '100%',
    borderRadius: theme.radius.xl,
    overflow:'hidden',
    borderCurve: 'continuous'
  },
  video:{

  },
  closeIcon: {
    position:'absolute',
    top: 10, 
    right:10,
    padding:7,
    borderRadius:50,
    backgroundColor:'rgba(255,0,0,0.6)'
  }

  

})