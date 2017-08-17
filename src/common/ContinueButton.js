import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ContinueButton = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={[styles.textStyle, style]}>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#a9a9a9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a9a9a9',
    marginLeft: 5,
    marginRight: 5,
  },
};

export { ContinueButton };
