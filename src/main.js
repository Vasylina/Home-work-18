console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'
var myNum = 10
var myStr = 'some string'
var myBool = true
var myArr = [1, 2, 3, 4, 5]
var myObj = { 
  first: 'First Name',
  last: 'Last Name'
}

console.log ('myNum', myNum)
console.log ('myStr', myStr)
console.log ('myBool', myBool)
console.log ('myArr', myArr)
console.log ('myObj', myObj)


/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2
var myNum = 10;
var decimal2 = myNum.toFixed(2);

console.log ('decimal2', decimal2)

/* 
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

// myBigInt
var myBigInt = 123n
myBigInt = myBigInt + 1
console.log ('myBigInt', myBigInt)