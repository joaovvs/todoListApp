import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',

    },

    searchWrapper:{
        flexDirection: 'row',
        gap: 4,
        paddingHorizontal: 24,
        marginTop: -30
    },
    
    input:{
        flex: 1,
        color: "#F2F2F2",
        backgroundColor: '#262626',
        borderRadius: 6,
        padding: 16
    },

    button: {
        backgroundColor: '#1E6F9F',
        padding: 18,

        borderRadius: 6

    },

    buttonText: {
        color: '#F2F2F2'
    },

    infoWrapper:{
        flexDirection: 'row',
        justifyContent: "space-between",

        paddingHorizontal: 24,
        marginTop: 33

    },

    info:{
        flexDirection: "row",
        gap: 8
    },

    created:{
        color: '#4EA8DE'
    },

    done:{
        color: '#8284FA' 
    },

    counter: {
        color: '#D9D9D9',
        backgroundColor: '#333',
        borderRadius: 9,
        paddingHorizontal: 8

    },

    counterText: {
        color: '#D9D9D9',
        backgroundColor: '#333',
        borderRadius: 9,
        paddingHorizontal: 8

    },

    taskList: {
        marginTop: 20,
        marginHorizontal: 24,
    }






});