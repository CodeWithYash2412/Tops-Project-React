// for loop

// for (var i = 1; i <= 10; i++) {
//     console.log(`10 x ${i} = ${10*i}`)
// }

// do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++
// } while (i < 5);

// while loop
// var n = 0
// while (n < 5) {
//     console.log(n)
//     n++
// }

// break 

// var m = 0
// while (m < 5) {
//     if (m == 2) {
//         break;
//     }
//     console.log(m)
//     m++
// }

// continue
// var o = 0;
// while (o < 7) {
//     if (o == 2) {
//         o++;
//         continue;
//     }
//     console.log(o);
//     o++;
// }

// for..in

var arr = [1, 24, 12, 2000, 09, 09, 1996, 2, 3, 4]

for (var i in arr) {
    console.log(i)
}

// for..of

for (var i of arr) {
    console.log(i)
}