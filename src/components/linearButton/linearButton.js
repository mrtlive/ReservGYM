import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colorPalette from "../../themes/colors";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../redux/exampleSlicer/exampleSlicer";

import React from "react";

const linearButton = (props) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(changeName())}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={props.colors}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          padding: 15,
          width: 200,
        }}
      >
        <Text style={{ color: colorPalette.white, fontWeight: "bold" }}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default linearButton;