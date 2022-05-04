import { FC } from "react";
import { StyleSheet, View, Text, ListRenderItemInfo } from "react-native";

const GoalItem: FC<{item: string}> = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.item}</Text>
    </View>
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
