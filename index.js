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

function triangleArea(base,height){
    return (base * height)*.5;
    
}
    // console.log("---Q8---")
    // console.log(triangleArea(5,10));

function betweenTwentyAndFourty(num){
    if(num >= 20 && num <= 100){
        return true;
    }else{
        return false;
    }
}
// console.log("---Q9---")
// console.log(betweenTwentyAndFourty(19));
// console.log(betweenTwentyAndFourty(44));

function largest(num1,num2,num3){
    return Math.max(num1,num2,num3);
}
// console.log("---Q10---")
//     console.log(largest(2,4,6));

function printTime(){
    let currentDate = new Date()
    let currentTime = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()
    return currentTime
}
// console.log("---Q11---")
// console.log(printTime())

function isLeapYear(year){
    for( let i = 1752; i <=year; i++){
         if(i === year){
             return true;
         }else{
             return false;
         }
    }
}
// console.log("---Q12---")
// console.log(isLeapYear(1756));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2020));
// console.log(isLeapYear(1999));

function getExtention(filename){
    let extension = filename.split(".").pop()
    return "."+ extension
}
// console.log("---Q13---")
// console.log(getExtention("hello.txt"));

function absoluteNineteen(num){
    let difference = Math.abs(num) - 19
    if (num > 19){
        return difference * 3;
    }
}
// console.log("---Q14---")
// console.log(absoluteNineteen(21));

// function switchLetters(str){
//     let array = []
//     let switchL = array.push(str.split("")).splice(array.length-1, 0, array[0]).splice(array[1], 0, array.length-1)
//     return switchL
// }
// console.log(switchLetters("anne"))

function switchLetters(str){
    var emptyStr = "";
    for(var i = 0; i < str.length; i++){
        if(i != 0 && i!= str.length-1){
            emptyStr += str[i]
            console.log(i)
        }
    }
    return str[str.length-1] + emptyStr + str[0];
}
console.log("---Q15---")
console.log(switchLetters("anne"))