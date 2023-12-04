import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskCard: {
        flexDirection: "row",
        backgroundColor: '#262626',
        paddingVertical: 12,
        paddingHorizontal: 8,
        gap: 8,
        justifyContent: "flex-start",

        alignItems: "center",

        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8
    },

    taskName:{
        flex: 1,
        color: '#F2F2F2',
        fontSize: 14,
        
    },

    taskNameDone:{
        flex: 1,
        color: '#808080',
        textDecorationLine: "line-through"
    },

   
    checkBoxButton:{
        margin: 0,
        padding: 0,
        position: "absolute",
        left: 15,
        top: 15
    },

    removeButton:{
        paddingHorizontal: 10,
        paddingVertical: 9

    },

    button: {
        color: '#808080',
        alignSelf: "flex-end"
    },

    


});