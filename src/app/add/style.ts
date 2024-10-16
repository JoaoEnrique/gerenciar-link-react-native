import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 62
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
    },
    title: {
        color: colors.gray[200],
        fontSize: 24,
        fontWeight: "600",
    },
    label: {
        color: colors.gray[400],
        fontSize: 14,
        paddingHorizontal: 24
    },
    form: {
        padding: 16,
        gap: 16
    }
})