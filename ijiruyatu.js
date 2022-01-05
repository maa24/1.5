let year = 5;
let nyuuryoku = 300;
let level = 1.2;

let hairetu  = [];

function keisan(){
  let nennsyuu = nyuuryoku;
  let gessyuu = Math.floor( nyuuryoku/12);
  let bonus = Math.floor( nyuuryoku%12);
  // console.log([nennsyuu,gessyuu,bonus]);
  return[nennsyuu,gessyuu,bonus];
}

// keisan();
function nennsyuu(){
  for(i = 1;i<5;i++){
    let [incomeA,monthlyA,bonusA] = keisan();
    nyuuryoku = incomeA;
    arr.push({nennsyuu:incomeA,gessyuu:monthlyA,bonus:bonusA})
  }
  display(hairetu);
}

function display(a){
  console.log(a);
}

// function tasu(){
//   for(i = 1,i <5;i++){
    
//   }
// }
  console.log("--------------")
  // sort()
// let ni = 3;

//   for (i = 1;i<=10;i++){
//     let answe = ni + i;
//     display(answe)
//   }

//   function display(answe) {
//     console.log(answe);
//   }


// 'use script'

// console.log(1);
//   //  console.log(nyuuryoku);

//  for(i = 1;i<10;i++){
//    if(i === 1){
//      let tuginotoshi = nyuuryoku;
//      display(tuginotoshi);
//      nyuuryoku = tuginotoshi
//    } else {
//      let tuginotoshi = Math.floor(nyuuryoku * 1.2);  
//      display(tuginotoshi);
//      nyuuryoku = tuginotoshi;
//  }
//  }
//  function display(tuginotoshi){
//    console.log(tuginotoshi);
//  }
