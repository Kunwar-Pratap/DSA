const data = [13, 12, 5, 87, 98, 3, 87];

let position = 4;
let element = 45;

// for (let i = data.length - 1; i >= 0; i--) {
//     // console.log(data[i]);
//     if (i >= position) {
//         data[i + 1] = data[i];
//         if (i === position) {
//             data[i] = element;
//         }
//     }
// }
// console.log(data);

// const newData = []
// data.forEach((item, index) => {
//     if (index === position) {
//         newData.push(element);
//     }
//     newData.push(item);
// })

// console.log(newData);

data.splice(position, 0, element);

console.log(data);
