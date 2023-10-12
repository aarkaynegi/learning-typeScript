// interface ILocation { lat: number, long: number }

// interface IRes {
//   userId: number
//   id: number
//   title: string
//   completed: boolean
// }

// interface IExtendIRes extends IRes {
//   gender: string
// }

// type Pretty<T> = {
//   [K in keyof T]: T[K]
// } & {}

// function consoleValues(payload: Pretty<IExtendIRes>) {
//   console.log('Values', payload)
// }


// async function callAPI() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const jsonResponse: IRes = await res.json()   // annotation
//     // const jsonResponse = await res.json() as IRes // assertion
//     // consoleValues({ userId: 4, completed: true, id: 4, title: 'a' })
//     console.log('Response', { y: 6 })
//   } catch (error) {
//   }
// }
// callAPI()



const json = '{"x": 10, "y": 20}'

const loc: { x: number; y: number } = JSON.parse(json);

let colors = ["red", "green", "blue"];

let foundWord = false;

for (let index = 0; index < colors.length; index++) {
  if (colors[index] == "green") {
    foundWord: true;
  }

}