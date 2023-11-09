import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Table = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Header 1</Text>
        </View>
        <View style={styles.cell}>
          <Text>Header 2</Text>
        </View>
        <View style={styles.cell}>
          <Text>Header 3</Text>
        </View>
        <View style={styles.cell}>
          <Text>Header 4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Data 1</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 2</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 3</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Data 5</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 6</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 7</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 8</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text>Data 9</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 10</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 11</Text>
        </View>
        <View style={styles.cell}>
          <Text>Data 12</Text>
        </View>
      </View>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: '20%',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
});
