import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../../constants";

const CustomText = ({ style, text, numberOfLines, onLayout }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, style]}
      onLayout={onLayout}
    >
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: COLORS.text_color,
    ...FONTS.Medium12
  },

});

export default CustomText;
