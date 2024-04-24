import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ onAdd }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    onAdd(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.flexContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />

      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    width: "70%",
  },
});
