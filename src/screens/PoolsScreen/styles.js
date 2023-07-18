import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        /* flex: 1, */
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        borderColor: 'red',
        height: 600,
      },
      inputContainer: {
        flexDirection: 'column',
      },
      title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
      },
      input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 5,
      },
      disabledInput: {
        backgroundColor: '#f2f2f2',
        color: '#999999',
        padding: 10,
        fontSize: 16,
      },
      labels: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
      },
      /* button: {
        height: 100,
        width: 300,
        borderColor: 'gray',
        backgroundColor: '#000000',
      }, */
      dropdownContainer: {
        height: 40,
        width: 300,
        marginBottom: 16,
      },
      dropdown: {
        backgroundColor: '#fafafa',
      },
      dropdownList: {
        backgroundColor: '#fafafa',
      },
      button: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 30,
      },
      
});

export default styles