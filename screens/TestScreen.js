import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions";

const TestScreen = () => {
  const { profile, ffname } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

  const [values, setValues] = useState({ ffname: "abc" });

  const textHandler = () => {};

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(profile)}</Text>
      <Text>TestScreen</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => textHandler("ffname", text)}
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "lightblue",
    width: "100%",
    height: 45,
  },
});
