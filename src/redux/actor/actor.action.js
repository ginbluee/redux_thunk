import {GET_ACTORS, UPDATE_ACTORS} from './actor.type';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const getValue = async () => {
//   return 'value';
// };

export const getActors = (payload) => {
  // const value = JSON.stringify(payload);
  // AsyncStorage.setItem('@storage_Key', value);
  //
  // // get
  // // let response = await fetch('https://reactnative.dev/movies.json');
  // console.log(getValue());

  return {
    type: GET_ACTORS,
    payload,
  };
};

export const updateActors = (payload) => ({type: UPDATE_ACTORS, payload});
