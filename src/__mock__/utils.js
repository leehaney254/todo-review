import { storeData, getData } from '../modules/complete.js';

const mockAdd = (input) => {
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

const mockDeletes = (index) => {
  const list = getData();
  list.splice(index, 1);
  list.forEach((item, index) => {
    item.index = index;
  });
  storeData(list);
  return list;
};

const mockEditElement = (input, index) => {
  const obj = {};
  const list = getData();
  obj.index = index;
  obj.description = input;
  obj.completed = false;
  list.splice(index, 1, obj);
  return list;
};

const mockClearComplete = (element) => {
  const list = [];
  if (element.completed === false) {
    list.push(element);
  }
  return list;
};

const mockUpdate = (data) => {
  const list = [];
  list.push(data);
  return list;
};

export {
  mockAdd, mockDeletes, mockEditElement, mockClearComplete, mockUpdate,
};