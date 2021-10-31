function getUnknownPropErrorDemo() {
  function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
  }
  const mergedObj = merge({ name: 'Max' }, { age: 30 });
  console.log(mergedObj);
  // console.log(mergedObj.name); // ts getting error: unknown prop
}

function getDeclaredPropByGenericDemo() {
  function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const mergedObj01 = merge                                                 ({ name: 'Max' },                      { age: 30 });
  console.log(mergedObj01.name); // correct
  const mergedObj02 = merge                                                 ({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
  console.log(mergedObj02.name); // correct
  const mergedObj03 = merge<{name: string, hobbies: string[]},{age: number}>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 }); // not necessary to specify //// redundant
  console.log(mergedObj03.name); // correct
}

function showDataLossPassingParamDemo() {
  function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const mergedObj = merge({ name: 'Max' }, 30);
  console.log(mergedObj); // LOSS of data // { name: 'Max' }
}

function controlPassingParamInGenericByConstraintDemo() {
  // type constrain //// then should accept any object // 
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 }); // correct
  // const mergedObj002 = merge({ name: 'Max', hobbies: ['Sports'] }, 30); // ts error: not an object
  console.log(mergedObj);
}
// getUnknownPropErrorDemo();
// getDeclaredPropByGenericDemo();
// showDataLossPassingParamDemo();
controlPassingParamInGenericByConstraintDemo();