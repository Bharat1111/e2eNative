import { Pressable, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Colors } from "../../constants/Colors";

type IconButton = {

    name: any;
    color: string;
    size: number;
    iconColor: string;
    onPress?: () => void;
    elevation?: number;
};
const IconButton: React.FC<IconButton> = ({
    name,
    color,
    size,
    iconColor,
    elevation,
    onPress,

}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: color },
        pressed && styles.pressed,
      ]}
      onPress={onPress}>
      <FontAwesome5 name={name} size={size} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
    pressed: {
        opacity: 0.7,
    },

});
