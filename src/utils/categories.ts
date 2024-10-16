import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string,
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    {id: "1", name: "Site", icon: "code"},
    {id: "2", name: "Projeto", icon: "code"},
    {id: "3", name: "Curso", icon: "code"},
    {id: "4", name: "Videos", icon: "movie"},
    {id: "5", name: "Documentação", icon: "content-paste"}
]
