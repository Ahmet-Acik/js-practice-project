// Array Methods

// 1. map
const arr = [1, 2, 3, 4, 5, 6];
const doubled = arr.map(x => x * 2);
console.log("map (doubled):", doubled);
console.log(`map (doubled): ${JSON.stringify(doubled)}`);

// 2. filter
const filtered = arr.filter(x => x % 2 === 0);
console.log("filter (even numbers):", filtered);
console.log(`filter (even numbers): ${JSON.stringify(filtered)}`);

// 3. reduce
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log("reduce (sum):", sum);
console.log(`filter (even numbers): ${JSON.stringify(filtered)}`);

// 4. forEach
console.log("forEach (each element):");
arr.forEach(x => console.log("  ", x));
arr.forEach(x => console.log(`  ${x}`));

// 5. find / findIndex
const firstEven = arr.find(x => x % 2 === 0);
console.log("find (first even):", firstEven);
console.log(`find (first even): ${firstEven}`);
const firstEvenIndex = arr.findIndex(x => x % 2 === 0);
console.log("findIndex (first even):", firstEvenIndex);
console.log(`findIndex (first even): ${firstEvenIndex}`);

// 6. some / every
const hasEven = arr.some(x => x % 2 === 0);
console.log("some (has even):", hasEven);
console.log(`some (has even): ${hasEven}`);
const allEven = arr.every(x => x % 2 === 0);
console.log("every (all even):", allEven);
console.log(`every (all even): ${allEven}`);

// 7. flatMap
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const flatMapped = nestedArr.flatMap(x => x.map(y => y * 2));
console.log("flatMap (doubled and flattened):", flatMapped);
console.log(`flatMap (doubled and flattened): ${JSON.stringify(flatMapped)}`);

// 8. sort
const sorted = arr.slice().sort((a, b) => a - b);
console.log("sort (ascending):", sorted);
console.log(`sort (ascending): ${JSON.stringify(sorted)}`);

// 9. slice
const sliced = arr.slice(1, 4);
console.log("slice (index 1 to 3):", sliced);
console.log(`slice (index 1 to 3): ${JSON.stringify(sliced)}`);

// 10. splice
const spliced = arr.slice();
spliced.splice(2, 2, 10, 20);
console.log("splice (replace index 2,2 with 10,20):", spliced);
console.log(`splice (replace index 2,2 with 10,20): ${JSON.stringify(spliced)}`);

// 11. concat
const arr2 = [7, 8, 9];
const concatenated = arr.concat(arr2);
console.log("concat (arr + arr2):", concatenated);
console.log(`concat (arr + arr2): ${JSON.stringify(concatenated)}`);

// 12. includes
const includesValue = arr.includes(3);
console.log("includes (3):", includesValue);
console.log(`includes (3): ${includesValue}`);

// 13. distinct
const distinctArr = [...new Set(arr)];
console.log("distinct (unique values):", distinctArr);
console.log(`distinct (unique values): ${JSON.stringify(distinctArr)}`);

// 14. limit / skip
const limited = arr.slice(0, 3);
console.log("limit (first 3):", limited);
console.log(`limit (first 3): ${JSON.stringify(limited)}`);
const skipped = arr.slice(3);
console.log("skip (after first 3):", skipped);
console.log(`skip (after first 3): ${JSON.stringify(skipped)}`);