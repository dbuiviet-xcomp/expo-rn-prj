import {setStatusBarBackgroundColor, StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [enteredText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    //setCourseGoals([...courseGoals, enteredText]);
    setCourseGoals(currentCourseGoals => [...courseGoals, enteredText]);
  }

  return (
    <View style={styles.appContainer}>
      {/* <Text style={styles.dummyText}>
        Hello React Native with Expo bundled!
      </Text>
      <View>
        <Text
          style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16}}>
          {/*Not recommended way of styling, use StyleSheet*/}
      {/* Enjoy Learning React Native!
        </Text>
      </View>
      <Button title="Click me" /> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <ScrollView style={styles.goalContainer}>
        {courseGoals.map(goal => (
          // <Text style={styles.goalItem} key={goal}>
          //   {goal}
          // </Text>
          // To overcome differences between iOS and Android, we nest <Text> component into <View>
          <View key={goal} style={styles.goalItem}>
            <Text style={{color: 'white'}}>{goal}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   margin: 12,
  //   padding: 12,
  //   borderWidth: 1,
  //   borderColor: 'blue',
  // },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16, //left & right padding
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    //color: 'white',
  },
});
