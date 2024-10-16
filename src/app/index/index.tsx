import { View, Image, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Category } from "@/components/category"


export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            <Category name="projetos" icon="code"/>
            <Category name="site" icon="language"/>
            <Category name="video" icon="movie"/>
        </View>
    )
}