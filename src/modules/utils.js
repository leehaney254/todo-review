import { storeData, getData } from './complete.js';

const add = (input) => {
  const addObj = {};
  const list = getData();
  if (list.length === 0) {
    addObj.index = 0;
  } else {
    addObj.index = list.length;
  }
  addObj.description = input;
  addObj.completed = false;
  list.push(addObj);
  storeData(list);
  return list;
};

export default add;