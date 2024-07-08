// let mergeSorting = (arr) => {
//   if (arr.length < 2) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left_side = mergeSorting(arr.slice(0, mid));
//   let right_side = mergeSorting(arr.slice(mid, arr.length));

//   return Array.from(
//     {
//       length: left_side.length + right_side.length,
//     },
//     () => {
//       if (!left_side.length) return right_side.shift();
//       else if (!right_side.length) return left_side.shift();
//       else
//         return left_side[0] > right_side[0]
//           ? right_side.shift()
//           : left_side.shift();
//     }
//   );
// };

// console.log(mergeSorting([20, 12, 15, 58, 17]));

const orignalArray = [20, 12, 15, 58, 17];
const orignalElement = document.getElementById('orignal');
const sortedElement = document.getElementById('sorted');

orignalElement.innerText = `${orignalArray}`;
const sortedArray = mergeSorting(orignalArray);
sortedElement.innerText = `${sortedArray}`;

function mergeSorting(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left_side = mergeSorting(arr.slice(0, mid));
  let right_side = mergeSorting(arr.slice(mid, arr.length));

  return Array.from(
    {
      length: left_side.length + right_side.length,
    },
    () => {
      if (!left_side.length) return right_side.shift();
      else if (!right_side.length) return left_side.shift();
      else
        return left_side[0] > right_side[0]
         ? right_side.shift()
          : left_side.shift();
    }
  );
}



