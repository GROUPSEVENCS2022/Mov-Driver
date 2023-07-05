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
      bottomDashboard: {
        height: 250,
        padding: 20,
        flexDirection: 'row',
      },
      bottomDashboardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      bottomDashboardSpecifics: {
        fontWeight: 'bold',
        color: '#707070',
        fontSize: 16,
      }
});

export default styles