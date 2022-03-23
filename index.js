function fiveToOneHundred(){
    for(let i = 5; i <=100; i++){
      console.log(i);
    }
}
// console.log("---Q1---")
// fiveToOneHundred();

function multiplesOfThree(){
    for(let i = 3; i <=100; i+=3){
        console.log(i);
    }
}
// console.log("---Q2---")
// multiplesOfThree();

function multiplesOfThreeOrFive(){
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
}
// console.log("---Q3---")
// multiplesOfThreeOrFive();

function untilNum(num){
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
}   
// console.log("---Q4---")
//     untilNum(15);

function multiply(num1, num2){
    return num1 * num2;
}
// console.log("---Q5---");
// console.log(multiply(2,5));

function add(num1, num2) {
    if (num1 === num2){
       return (num1 + num2)*3;
    }else{
       return num1 + num2;
    }
    
}
    // console.log("---Q6---")
    // console.log(add(2, 2));
    // console.log(add(2, 3));
    
function isNegative(num){
    if(num < 0){
        return true;
    }else{
        return false;
    }
}
// console.log("---Q7---");
// console.log(isNegative(3));
// console.log(isNegative(-3));
// console.log(isNegative(0));
