import { storeData, getData } from '../modules/complete.js';

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

const deletes = (index) => {
  const list = getData();
  list.splice(index, 1);
  list.forEach((item, index) => {
    item.index = index;
  });
  storeData(list);
  return list;
};

export { add, deletes };