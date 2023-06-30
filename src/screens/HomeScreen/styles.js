import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomContainer: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    bottomText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4a4a4a',

    },
    roundButton: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 17,
    },
    startButton: {
        position: 'absolute',
        backgroundColor: 'black',
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        /* padding: 5, */
        borderRadius: 50,
        bottom: 110,
        marginLeft: 'auto',
        marginRight: 'auto',
        left: Dimensions.get('window').width / 2 - 37,
        right: 0,
    },
    startText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    poolButton: {
        position: 'absolute',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 100,
        borderRadius: 50,
        top: 50,
        left: Dimensions.get('window').width / 2 - 37,
        right: 0,
    },
    poolText: {
        fontSize: 15,
        color: 'whit',
        fontWeight: 'bold',
    }
});

export default styles