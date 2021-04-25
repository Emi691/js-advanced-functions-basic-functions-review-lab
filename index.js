// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {add, subtract, multiply, divide}

function add(num1, num2){
   return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
 }

 function multiply(num1, num2){
    return num1 * num2
 }

 function divide(num1, num2){
    return num1 / num2
 }

 function actionApplyer(num, array){
    if(array.length === 0){
        return num
    }else{
        array.forEach(element => {
            num = element(num)
        });
        return num
    }
 }