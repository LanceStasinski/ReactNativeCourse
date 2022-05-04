import { FC } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem: FC<{
  item: string;
  id: string;
  onDelete: (id: string) => void;
}> = (props) => {
  

  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.item}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});

export default GoalItem;
