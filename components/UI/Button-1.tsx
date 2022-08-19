import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Button1 = ({
  onPress,
  fontSize,
  children,
  backgroundColor,
  marginVertical,
  marginTop,
  color,
}: {
  backgroundColor?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  marginVertical?: number;
  marginTop?: number;
  color?: boolean;
  fontSize?: number;
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#9f9b9bff", radius: 160 }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: backgroundColor,
        borderRadius: 6,
        marginVertical: marginVertical,
        marginTop: marginTop,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: color ? "black" : "white",

          fontSize: fontSize,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default Button1;
