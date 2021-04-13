

// const obj = {
//   k1: {
//     id: 1,
//     k2: {
//       id: 2,
//       k3: {
//         id: 3,
//         k4: {
//           id: 4,
//           k5: {
//             id: 5,
//             k6: {
//               id: 6,
//               k7: {
//                 id: 7,
//                 k8: {
//                   id: 8,
//                   k9: {
//                     id: 9,
//                     k10: {
//                       id: 10,
//                       deep: 10,
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// };


const obj = {};
const arr = [...new Uint8Array(10000)].map((item, i) => i + 1);
for (let i = 0; i < arr.length; i++) {
  let temp = {
    [`k${i}`]: i,
  };
  // obj = {
  //   [`k${i}`]: i,
  // };
  // 递归
}