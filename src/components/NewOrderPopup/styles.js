import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20,
        height: '100%',        
        justifyContent: 'space-between',
        backgroundColor: '#00000099'
    },
    popContainer: {
        backgroundColor: 'black',
        /* flex: 1, */
        borderRadius: 10,
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    minutes: {
        color: 'white',
        fontSize: 36,
    },
    distance: {
        color: 'lightgrey',
        fontSize: 26,
    },
    movType: {
        color: 'lightgrey',
        fontSize: 20,
        marginHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userBg: {
        backgroundColor: '#008bff',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    },
    declineButton: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
    },
    declineText: {
        color: 'white',
        fontWeight: 'bold',

    },

   
});

export default styles