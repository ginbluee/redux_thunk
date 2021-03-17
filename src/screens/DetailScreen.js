import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = (props) => {
  const {params} = props.route;
  const {item, onDelete} = params;

  const _onDelete = () => {
    props.navigation.goBack();
    onDelete(item);
  };

  return (
      <View style={styles.container}>
        <Text>
          {item.name}
        </Text>
        <Image
          source={{uri: item.photo}}
          style={{ width: 100, height: 100}}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 25,
            marginVertical: 20,
          }}
          onPress={_onDelete}
        >
          <Text>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
