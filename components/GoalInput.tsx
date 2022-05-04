import { FC, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

const GoalInput: FC<{
  onAddGoal: (enteredGoalText: string) => void;
}> = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (
    enteredText: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredGoalText(enteredText.nativeEvent.text);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goals"
        onChange={goalInputHandler}
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
