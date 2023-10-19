// Interfaces

// const nums = [2, 7, 11, 15];
// const target = 9;
// function solution(nums: number[], target: number) {
//   let map = new Map();
//   for (let index = 0; index < nums.length; index++) {
//     let com = target - nums[index];
//     if (map.has(com)) {
//       console.log(map);
//       return [index, map.get(com)];
//     } else {
//       map.set(nums[index], index);
//     }
//   }
// }
// console.log(solution(nums, target));