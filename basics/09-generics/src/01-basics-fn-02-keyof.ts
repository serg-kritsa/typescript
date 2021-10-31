
function acceptObjWithLengthPropDemo(){
  interface Lengthy {
    length: number;
  }

  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
      descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
      descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]; // tuple
  }

  console.log(countAndDescribe(['Sports', 'Cooking']));
  console.log(countAndDescribe('Cooking')); // also works here
}
// acceptObjWithLengthPropDemo();

function keyofConstraintDemo(){
  //                                            one of the key of object passed before as param1
  function extractAndConvert<T1 extends object, T2 extends keyof T1>(
    obj: T1,
    key: T2
  ) {
    return 'Value: ' + obj[key];
  }
  // extractAndConvert({}, 'name'); // error: not known key
  extractAndConvert({ name: 'Max' }, 'name'); // correct
}
