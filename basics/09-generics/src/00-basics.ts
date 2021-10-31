function genericInArrayDemo(){
  // const names: Array<string | number> = [];
  // const names: Array<any> = [];
  const names: Array<string> = ['A'];
  names[0].charAt(1);
}

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      if(1>2) resolve('Done');
      else reject('-');
    }, 
    2000);    
});

promise.then(data => {
  console.log(data);  
  data.split(' ');
}).catch(data => {
  console.log(data);  
  data.split(' ');
})
