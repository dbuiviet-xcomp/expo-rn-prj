import {useState} from 'react';

import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={'red'} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
    //paddingBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginTop: 10,
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    width: '100%',
    //marginRight: 8,
    padding: 16,
    //color: 'white',
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
