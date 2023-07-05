import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
        borderColor: 'red',
        height: 600,
      },
      commuterContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 5,
      },
      commuterName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      commuterDetails: {
        fontSize: 16,
      },
      modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
      },
      modalDetails: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white',
      },
      closeButton: {
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
      },
      closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
});

export default styles