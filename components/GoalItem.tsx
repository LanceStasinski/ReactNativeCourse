import { FC } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem: FC<{
  item: string;
  id: string;
  onDelete: (id: string) => void;
}> = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDelete.bind(this, props.id)}
        android_ripple={{ color: "#1f0246" }}
        style={ pressedData => pressedData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItem;
