'use script'


   

  // function nennsyuu(nen){
  //    document.getElementById('u').textContent = nen +'年目で年収は' +man(1,300,1) +' 万円です';

  // }

  let intialIncome = 300
  let arr = []

  function man (baseIncome,level,year){
    let income = Math.floor(baseIncome * level);
    let monthly =Math.floor(baseIncome /12);
    let bonus= Math.floor(baseIncome%12);
    return [income,monthly,bonus]; 
   }
  
  function income(){
    for (i=1;i<15;i++){
      let [incomeA,monthlyA,bonusA] = man(intialIncome,1.2,i);
      intialIncome = incomeA
      arr.push({income:incomeA,monthly:monthlyA,bonus:bonusA})
    }
    display(arr);
  }

  function display(a) {
    console.log(a)
  }
  income()
function sort() {
  arr.sort((a,b)  => 
    b.bonus - a.bonus
  )
  display(arr)
}


  console.log("--------------")
  sort()

// function monthly(){
//    let moonthly =Math.floor(baseIncome /12);
//    return moonthly;
// }

// function bonus(){
//   let boonus= Math.floor(baseIncome%12);
//   return boonus;
// }


//   function ni  (iti,ni){
//     return iti+ni;
//   }

//   for (i = 1;i<=100;i++){
//     let answe = ni(i,2)
//     display(answe)
//   }

//   function display(answe) {
//     console.log(answe);
//   }
//   for(let i = 100; i < 1000; i++) {
//     let answe = ni(i,2)
//     display(answe)
//   }


//   let answe =ni(1,2);

// console.log(answe);
