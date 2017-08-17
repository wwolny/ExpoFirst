import React from 'react';
import { View, Text } from 'react-native';

const HeaderSection = (props) => {
  const { backgroundStyle, textStyle } = styles;

  return (
    <View style={backgroundStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  backgroundStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
};

export { HeaderSection };
