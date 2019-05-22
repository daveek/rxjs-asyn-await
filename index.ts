import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';


const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(x => console.log(x));


async function mySecondFunction(x: number) {
  setTimeout(() => {}, 10000);
  return 2 + x;
}

async function myThirdNestedFunction(x: number) {
  setTimeout(() => {}, 3000);
  return 3 + x;
}

async function myAwesomeFunction() {
  let startingValue = 1;
  console.warn(` startingValue: ${startingValue}`);
  // we can await the call to mySecondFunction() as this
  // returns a promise that will eventually return
  // our firstResult
  let firstResult = await mySecondFunction(startingValue);
  console.warn(`FirstResult: ${firstResult}`);
  // once mySecondFunction has resolve, our function will
  // carry on execution of myThirdNestedFunction
  let finalResult = await myThirdNestedFunction(firstResult);
  // once this resolves, we get back our finalResult
  // which we can subsequently return
  return finalResult;
}

let promise = myAwesomeFunction();
promise.then(result => console.log(result));


//another async example 

async function myAsyncFunction(input: number) {
  // the internal part of our async function
  // will still be executed synchronously thanks
  // to the await keyword
  let result = await setTimeout(() => {
    console.log("Function: %d executed", input);
  }, 1000 * input);
}

 
Promise.apply(myAsyncFunction(3));
