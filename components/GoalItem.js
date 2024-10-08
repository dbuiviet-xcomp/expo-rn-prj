import {StyleSheet, View, Text, Pressable, Image} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        //android_ripple={{color: '#ffffff'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // object destructuring
        style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.textContainer}>
          <Image
            style={styles.imageItem}
            source={require('../assets/images/goal.png')}
          />
          <Text style={{color: 'white', padding: 8}}>{props.itemText}</Text>
        </View>
        <View></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    //color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  textContainer: {flexDirection: 'row'},
  imageItem: {width: 30, height: 30, resizeMode: 'contain', padding: 8},
});

export default GoalItem;
