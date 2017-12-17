'use strict';

import React, {
  StyleSheet,
  Text
} from 'react-native';

export default function (props, state) {
  return (
    <Text style={styles.screen}>
      {state.displayScreen}
    </Text>
  );
}

var styles = StyleSheet.create({
  screen: {
    color: '#e3b885',
    fontSize: 70,
    fontWeight: '200',
    text-align: center
  }

});
