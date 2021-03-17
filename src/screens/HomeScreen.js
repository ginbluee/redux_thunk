import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, FlatList, Text, Image, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getActors, updateActors} from '../redux/actor/actor.action';

const payload = [
  {
    "id:": 0,
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3, 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
    "wife": null,
    "weight": 67.5,
    "hasChildren": true,
    "hasGreyHair": false,
    "children": [
      "Suri",
      "Isabella Jane",
      "Connor"
    ]
  },
  {
    "id": 1,
    "name": "Robert Downey Jr.",
    "age": 53,
    "Born At": "New York City, NY",
    "Birthdate": "April 4, 1965",
    "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
    "wife": "Susan Downey",
    "weight": 77.1,
    "hasChildren": true,
    "hasGreyHair": false,
    "children": [
      "Indio Falconer",
      "Avri Roel",
      "Exton Elias"
    ]
  }
];

const HomeScreen = (props) => {
  const [data, setData] = useState([]); //state nội bộ
  const actor = useSelector(state => state.actor); //state cục bộ

  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getDataGlobal();

    getData();
  }, []);

  const getDataGlobal = () => {
    dispatch(getActors(payload));
  };

  const getData = () => {
    setData(payload);
  };

  const renderAdd = () => {
    return (
      <View>
        <View style={{
          borderColor: 'gray',
          borderWidth: 0.5,
          marginHorizontal: 20,
          height: 40,
        }}>
          <TextInput
            placeholder="Nhập tên"
            style={{
              height: 40,
              paddingHorizontal: 15,
            }}
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'tomato',
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 25,
            marginVertical: 20,
          }}
          onPress={onAdd}
        >
          <Text>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onAdd = () => {
    const newActor = {
      // id: actor.data.length + 1,
      id: data.length + 1,
      name: name,
      "age": 53,
      "Born At": "New York City, NY",
      "Birthdate": "April 4, 1965",
      "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
      "wife": "Susan Downey",
      "weight": 77.1,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Indio Falconer",
        "Avri Roel",
        "Exton Elias"
      ]
    };

    // const newActors = [...actor.data, newActor];
    const newActors = [...data, newActor];

    setName("");
    // dispatch(updateActors(newActors));
    setData(newActors);
  };

  const renderActors = () => {
    return (
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={actor.data}
        // data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'teal',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}
        onPress={() => goToDetail(item)}
      >
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
          onPress={() => onDelete(item)}
        >
          <Text>
            Delete
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const goToDetail = (item) => {
    props.navigation.navigate('Detail', {item, onDelete}) //pass callback function
  };

  const onDelete = (item) => {
    alert(item.name);
    // const newActors = actor.data.filter(e => e.id !== item.id);
    const newActors = data.filter(e => e.id !== item.id);

    // dispatch(updateActors(newActors));
    setData(newActors);
  };

  return (
    <View style={styles.container}>
      {renderAdd()}
      {renderActors()}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
