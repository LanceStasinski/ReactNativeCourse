import { FC, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Modal,
  Image,
} from "react-native";

const GoalInput: FC<{
  onAddGoal: (enteredGoalText: string) => void;
  showModal: boolean;
  onToggleModal: () => void;
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
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChange={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onToggleModal}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#a671ec" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingBottom: "40%",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    borderRadius: 6,
    padding: 16,
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
    margin: 8,
  },
});

export default GoalInput;
