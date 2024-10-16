import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native"
import { styles } from "./style"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            
            <Categories/>

            

            <FlatList 
                data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
                keyExtractor={item => item}
                renderItem={() => (
                    <Link name="Joao" url="https://googlee.com" onDetails={() => console.log("a") }></Link>
                )}

                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>

                            <TouchableOpacity>
                                <MaterialIcons size={20} name="close" color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>
                            asasasasasas
                        </Text>

                        <Text style={styles.modalUrl}>
                            asasasasasas
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}