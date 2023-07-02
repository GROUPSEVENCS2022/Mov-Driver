import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const NewOrderPopup = ({ 
    newOrder, onAccept, onDecline, 
    duration, distance 
}) => {

    /* const onDecline = () => {
        console.warn('on decline order');
    }

    const onAccept = () => {
        console.warn('on Accept order');
    } */

  return (

    
    <View style={styles.root}>

        <Pressable onPress={onDecline} style={styles.declineButton}>
            <Text style={styles.declineText}>Decline</Text>
        </Pressable>

        <Pressable onPress={onAccept} style={styles.popContainer}>
            <View style={styles.row}>
                <Text style={styles.movType}>{newOrder.type}</Text>
                <View style={styles.userBg}>
                    <FontAwesome name={"user"} color={'lightgrey'} size={35} />
                </View>
                <Text style={styles.movType}>
                    <AntDesign name={"star"} size={18} />
                    {newOrder.user.rating}
                    </Text>
            </View>

            <Text style={styles.minutes}>{duration} Min</Text>
            <Text style={styles.distance}>{distance} Km</Text>

        </Pressable>
    </View>      
  );
}

export default NewOrderPopup;