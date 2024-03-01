import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
const IconComponent = ({ name, style, iconHeight, fill = 'transparent' }) => {
  return (
    <View style={[styles.main_view, style]}>
      {iconHeight ? (
        <SvgXml xml={name} height={iconHeight} fill={fill} />
      ) : (
        <SvgXml xml={name} fill={fill} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main_view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default IconComponent;
