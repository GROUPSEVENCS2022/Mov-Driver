import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      initials: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      popupContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
      },
      popupHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      typeContainer: {
        borderRadius: 5,
        margin: 5,
        padding: 4,
        backgroundColor: '#efefef'
      },
      imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      imageWrapper: {
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        margin: 5,
        padding: 4,
      },
      selectedImageWrapper: {
        borderWidth: 2,
        borderColor: 'orange',
      },
      image: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginBottom: 5,
      },
      imageLabel: {
        fontSize: 12,
        marginBottom: 5,
      },
      radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      radioButtonSelected: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: 'orange',
      },
      input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
      },
      modalButton: {
        backgroundColor: 'black',
        height: 40,
      },
      modalButtonStroke: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        height: 40,
      },
    
});

export default styles