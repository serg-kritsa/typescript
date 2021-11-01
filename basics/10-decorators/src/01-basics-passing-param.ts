function WithTemplate01(template: string, hookId: string) {
  return function(_: any) { // ignored param
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

function WithTemplate02(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      const p = new constructor();
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

// @WithTemplate01('<h1>My Custom Text</h1>', 'app')
@WithTemplate02('<h1>My Custom Text</h1>', 'app')
class TextOnHTMLPage {
  name = 'user';

  constructor() {
    console.log('CONSTRUCTOR...');
  }
}
// const demo = new TextOnHTMLPage(); // class instance isn't needed 
// console.log(demo);
