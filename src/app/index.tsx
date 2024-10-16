import { View, Linking, TouchableOpacity, FlatList, Modal, Text, Alert } from "react-native"
import { styles } from "./style"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/options"
import { router, useFocusEffect } from "expo-router"
import { useCallback, useState } from "react"
import { categories } from "@/utils/categories"
import { LinkStorage, linkStorage } from "@/storage/link-storage"

export default function Index(){
    const [showModal, setShowModal] = useState(false)
    const [category, setCategory] = useState(categories[0].name)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [linkSelected, setlinkSelected] = useState<LinkStorage>({} as LinkStorage)

    async function getLinks(){
        try {
            const response = await linkStorage.get()
            const filtered = response.filter((link) => link.category === category)
            setLinks(filtered)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar links")
            console.log(error);
            
        }
    }

    function handleDetails(selected: LinkStorage){
        setShowModal(true)
        setlinkSelected(selected);
    }

    async function removeLink(){
        try {
            await linkStorage.remove(linkSelected.id)
            getLinks();
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir link")
            console.log(error);
        }
    }

    function handleRemove(){
        Alert.alert("Excluir", "Deseja realmente excluir?", [
            {style: 'cancel', text: "Não"},
            {text: "Sim", onPress: removeLink}
        ])
    }

    async function handleOpen(){
        try {
            await Linking.openURL(linkSelected.url)
            setShowModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível abrir link")
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        getLinks()
    }, [category]))
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="language" size={30} style={styles.logo} />

                <TouchableOpacity onPress={() => router.navigate('/add')}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>

            
            <Categories selected={category} onChange={setCategory}/>

            <FlatList 
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Link name={item.name} url={item.url} onDetails={() => handleDetails(item) }></Link>
                )}

                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={showModal} animationType="slide">
                <View style={styles.modal}>
                    {/* fechar ao clicar na tela */}
                    <TouchableOpacity style={styles.modalOverlay} onPress={() => setShowModal(false)}></TouchableOpacity>

                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                        <Text style={styles.modalCategory}>{linkSelected.category}</Text>

                        <TouchableOpacity onPress={() => setShowModal(false)}>
                            <MaterialIcons size={20} name="close" color={colors.gray[400]} />
                        </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>{linkSelected.name}</Text>

                        <Text selectable style={styles.modalUrl}>{linkSelected.url}</Text>

                        <View style={styles.modalFooter}>
                        <Option onPress={handleRemove} name="Excluir" icon="delete" variant="secondary" />
                        <Option onPress={handleOpen} name="Abrir" icon="language" />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}