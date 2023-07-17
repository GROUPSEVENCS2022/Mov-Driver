import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      infoText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      statusText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
    carImage: {
      width: 300,
      marginRight: 10,
      borderRadius: 8,
    },
    statusIndicator: {
      borderRadius: 8,
      marginRight: 10,
      padding: 10,
    },
    carBrand: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    carModel: {
      fontSize: 14,
      marginBottom: 4,
    },
    carPlate: {
      fontSize: 12,
      color: 'gray',
    },
  });

  export default styles