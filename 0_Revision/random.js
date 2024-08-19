let data = [1, 3, 5, 7, 9];
let temp;
// for (let i = 0; i < data.length; i++){
//   let temp = data[i];

// }

function reverseArray(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverseArray(data, start + 1, end - 1);
  }
}
reverseArray(data, 0, data.length - 1);