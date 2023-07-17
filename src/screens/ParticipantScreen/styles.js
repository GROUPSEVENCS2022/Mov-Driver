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
      participantItem: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee',
      },
      driverName: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        width: '80%',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalCloseButton: {
        marginTop: 20,
        alignSelf: 'flex-end',
      },
      modalCloseButtonText: {
        fontSize: 16,
        color: 'black',
      },
});

export default styles