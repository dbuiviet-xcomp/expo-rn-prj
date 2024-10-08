import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        //android_ripple={{color: '#ffffff'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // object destructuring
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={{color: 'white', padding: 8}}>{props.itemText}</Text>
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
});

export default GoalItem;
