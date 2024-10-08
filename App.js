import {setStatusBarBackgroundColor, StatusBar} from 'expo-status-bar';
import {
  StyleSheet,
  //Text,
  View,
  Button,
  TextInput,
  //ScrollView,
  FlatList,
} from 'react-native';
import {useState} from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    //console.log('CANCELED');
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    //setCourseGoals([...courseGoals, enteredText]);
    setCourseGoals(currentCourseGoals => [
      ...courseGoals,
      {text: enteredText, id: Math.random().toString()},
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    //console.log('DELETED');

    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
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

      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {/* {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} />} */}
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map(goal => (
            // <Text style={styles.goalItem} key={goal}>
            //   {goal}
            // </Text>
            // To overcome differences between iOS and Android, we nest <Text> component into <View>
            <View key={goal} style={styles.goalItem}>
              <Text style={{color: 'white'}}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                itemText={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>

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
  goalContainer: {
    flex: 4,
  },
});
