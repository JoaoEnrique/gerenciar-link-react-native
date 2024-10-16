/**
 * chave e valor //precisa ser um texo
 * name: "Valor" 
 * 
 * chave copm valores de arrays (precisa converter para string ao guardar e para objeto ao ler)
 * links: [ {}, {} ]
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
const LINKS_STORAGE_KEY = "links-storage"

export type LinkStorage = {
    id: string,
    name: string,
    url: string,
    category: string,
}

async function get(): Promise<LinkStorage[]>{
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
    const response = storage ? JSON.parse(storage) : [] //converte para objeto se tiver valor
    return response;
}

async function save(newLink: LinkStorage){
    try{
        const storage = await get()
        const updated = JSON.stringify([...storage, newLink]) //converte lista de links + novo para string
        await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated)
    } catch(error){
        throw error
    }
}

async function remove(id: string){
    const storage = await get()
    const updated = storage.filter((link) => link.id !== id) //pega todos os links tirando o do id
    await AsyncStorage.setItem(LINKS_STORAGE_KEY,  JSON.stringify(updated))
}

export const linkStorage = { get, save, remove }