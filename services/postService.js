import { supabase } from "../lib/supabase";
import { uploadFile } from "./imageService";

export const createOrUpdateService = async(post)=>{

    try {
    
        // upload image
        if(post.file && typeof post.file == 'object'){
            let isImage = post?.file?.type == 'image';
            let folderName = isImage? 'postImages' :'postVideos'
            let fileResult = await uploadFile(folderName, post?.file?.uri, isImage )
            if(fileResult.success) post.file = fileResult.data;

            else{
                return fileResult;
            }
        }

        const { data, error} = await supabase
        .from('posts')
        .upsert(post)
        .select()
        .single();


        if(error){
            console.log('Fetch Service error :', error);
        return{success: false, msg: 'Could not fetch your service'}
        }
        return{success:true, data:data}
    } catch (error) {
        console.log('Fetch Service error :', error);
        return{success: false, msg: 'Could not fetch your service'}
        
    }
}

export const fetchServices = async(limit=10)=>{

    try {
        const {data, error} = await supabase
        .from('posts')
        .select(`
        *,
        user: users (id, name,image)
        
        `)
        .order('created_at', {ascending: false})
        .limit(limit)

        if(error){
            console.log('Fetch Service error :', error);
            return{success: false, msg: 'Could not create your service'}
        }

        return{ success:true, data:data}
    
        
    } catch (error) {
        console.log('Fetch Service error :', error);
        return{success: false, msg: 'Could not create your service'}
        
    }
}

export const fetchServicesDetails = async(postId)=>{

    try {
        const {data, error} = await supabase
        .from('posts')
        .select(`
        *,
        user: users (id, name,image)
        
        `)
        .eq('id', postId)
        
        .single();

        if(error){
            console.log('Fetch  Service  Details error :', error);
            return{success: false, msg: 'Could not create your service'}
        }

        return{ success:true, data:data}
    
        
    } catch (error) {
        console.log('Fetch Service Details error :', error);
        return{success: false, msg: 'Could not fetch your service details'}
        
    }
}


export const createConsultation = async(consultation)=>{

    try {
    
        const { data, error} = await supabase
        .from('comments')
        .upsert(consultation)
        .select()
        .single();


        if(error){
            console.log('Create consultation error :', error);
        return{success: false, msg: 'Could not create your consultation'}
        }
        return{success:true, data:data}
    } catch (error) {
        console.log('Create consultation error :', error);
        return{success: false, msg: 'Could not create your consultation'}
        
    }
}
