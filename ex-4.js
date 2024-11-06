function findOdd(nums) {
  // Start coding here
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    // console.log(`this is num I`, nums[i])
    for (let j = 0; j < nums.length; j++) {
      // console.log(`this is num J`, nums[j])
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    // console.log(`${nums[i]} count ${count}`)
    if (count % 2 !== 0) {
      return nums[i]
    } 
  }
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1,2,2,3,3,4,3,3,1])
let result4 = findOdd([7,7,7,7,7,5,5,5,5,1,1,2,2,2,2])

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
console.log(result4); // 7
