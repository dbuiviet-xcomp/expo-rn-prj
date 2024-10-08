import {StyleSheet} from 'react-native';

function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={{color: 'white'}}>{itemData.item.text}</Text>
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
});

export default GoalItem;
