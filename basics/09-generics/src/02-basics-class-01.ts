function dataStorageWithoutGenericTypesDemo(){
  // class DataStorage {
  //   private data = [];
  
  //   addItem(item) {
  //     this.data.push(item);
  //   }
  
  //   removeItem(item) {
  //     if (this.data.indexOf(item) === -1) {
  //       return;
  //     }
  //     this.data.splice(this.data.indexOf(item), 1); // -1
  //   }
  
  //   getItems() {
  //     return [...this.data];
  //   }
  // }
}

function dataStorageWithGenericTypesDemo(){
  class DataStorage<T> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
  }
  const textStorage = new DataStorage<string>();
  textStorage.addItem('A');
  textStorage.addItem('B');
  textStorage.removeItem('B');
  console.log(textStorage.getItems());
  // textStorage.addItem(2); // error
  
  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(1);
  numberStorage.addItem(2);
  numberStorage.removeItem(2);
  console.log(numberStorage.getItems());
}

function dataStorageWithGenericTypesReferenceTypeIssue(){
  class DataStorage<T> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) { // 3+) check for accidental removing
        return;
      }
      // 3) indexOf doesn't work with reference value correctly // search by address fails 
      this.data.splice(this.data.indexOf(item), 1); // -1 returned from indexOf and in this case splice will be removed  the last element
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const wrongWay = new DataStorage<object>();
  wrongWay.addItem({name: 'Max'}); // 1) added object has address in memory 
  wrongWay.addItem({name: 'Manu'});
  // ...
  wrongWay.removeItem({name: 'Max'}); // 2) try to remove new object with different address in memory 
  console.log(wrongWay.getItems()); // [{name: 'Max'}]

  const correctWay = new DataStorage<object>();
  const maxObj = {name: 'Max'}; // 4) store LINK to object
  correctWay.addItem(maxObj); // 5) pass by reference
  correctWay.addItem({name: 'Manu'});
  // ...
  correctWay.removeItem(maxObj); // 5) pass by reference
  console.log(correctWay.getItems());
}

function dataStorageWithGenericPrimitiveTypesToFix(){
  class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
    
    addItem(item: T) {
      this.data.push(item);
    }
    
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
    
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');
  textStorage.removeItem('Max');
  console.log(textStorage.getItems());
  
  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(1);
}

function dataStorageWithMixedPrimitiveTypesUsingUnion(){
  class DataStorage {
    private data: (string | number | boolean)[] = [];
    
    addItem(item: string | number | boolean) {
      this.data.push(item);
    }
    
    removeItem(item: string | number | boolean) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
    
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage();
  textStorage.addItem('Max');
  textStorage.addItem(1); // allowed
  textStorage.addItem(true); // allowed
  textStorage.removeItem('Max');
  console.log(textStorage.getItems()); // [1, true]
}

// dataStorageWithoutGenericTypesDemo();
// dataStorageWithGenericTypesDemo();
// dataStorageWithGenericTypesReferenceTypeIssue();
dataStorageWithGenericPrimitiveTypesToFix();