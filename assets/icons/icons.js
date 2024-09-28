import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <AntDesign name="home" size={26} {...props} />,
    create: (props)=> <Feather name="compass" size={26} {...props} />,
    created: (props)=> <AntDesign name="pluscircleo" size={26} {...props} />,
    profile: (props)=> <AntDesign name="user" size={26} {...props} />,
    explore: (props)=> <Feather name="book" size={26} {...props} />,
}