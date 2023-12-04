import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingVertical: 40,
        paddingHorizontal: 24,
        alignItems: "center",
        gap: 16,

        borderTopWidth: 1,
        borderColor: "#333"
        
    },

    clipboard:{
        
        paddingHorizontal: 20
    },

    emptyTitle:{
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14
    },

    emptyContent: {
        color: '#808080',
        fontWeight: 'normal',
        fontSize: 14
    }


});