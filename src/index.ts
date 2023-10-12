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


// variable annotations
const json = '{"x": 10, "y": 20}'

const loc: { x: number; y: number } = JSON.parse(json);

let colors = ["red", "green", "blue"];

let foundWord = false;

for (let index = 0; index < colors.length; index++) {
  if (colors[index] == "green") {
    foundWord: true;
  }

}

// function annotations
const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number) {
  return a / b;
}

const mutiply = function (a: number, b: number) {
  return a * b;
}

// void and never
const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}


// argument destructuring
const todaysWeather = {
  date: new Date(),
  weather: "Sunny"
}

const logWeather = (weather: { date: Date, weather: string }) => {
  console.log(weather.date)
  console.log(weather.weather)
}

logWeather(todaysWeather)

const logWeather2 = ({ date, weather }: { date: Date, weather: string }) => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)

//object annotations
const profile = {
  name: "Rohit",
  age: 27,
  coords: {
    lat: 10,
    lng: 20
  },
  setAge(age: number): void {
    this.age = age
  }
}

// const age = profile.age;

const { age, name }: { age: number, name: string } = profile

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile