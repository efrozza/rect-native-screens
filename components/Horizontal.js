import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
      >
        <View style={[styles.outer, styles.outerOne]}>
          <Text style={styles.innerText}>Testes </Text>
        </View>
        <View style={[styles.outer, styles.outerTwo]}>
          <Text style={styles.innerText}>Testes view 2</Text>
        </View>
        <View style={[styles.outer, styles.outerThree]}>
          <Text style={styles.innerText}>Testes view 3</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  outerOne: {
    backgroundColor: '#34495e',
  },
  outerTwo: {
    backgroundColor: '#f39c12',
  },
  outerThree: {
    backgroundColor: '#2ecc71',
  },
  innerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
