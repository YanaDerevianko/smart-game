import { v4 as uuidv4 } from "uuid";
// СТВОРЕННЯ МАСИВУ ПАР ПРОСТИХ ЧИСЕЛ:

//1. ФУНКЦІЯ ПЕРЕВІРКИ ЧИСЛА (ЧИ Є ПРОСТИМ)
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return number > 1
}

//2. ФУНКЦІЯ ГЕНЕРУВАННЯ РАНДОМНОГО ЧИСЛА
const generateRandomNumber = (min, max) => {
    let number = min - 0.5 + Math.random() * (max - min + 1);
    number = Math.round(number);
    return number
}

// 3. ФУНКЦІЯ ПЕРЕВІРКИ МАСИВУ НА УНІКАЛЬНІСТЬ (повертає масив унікальних значень)
const unique = (arr) => {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

// 4. ФУНКЦІЯ ДЛЯ СТВОРЕННЯ МАСИВУ З 15 ПАР ОДНАКОВИХ ЧИСЕЛ

export const createRandomArray = () => {
    let array = [];
    let uniqueArray = [];
    do {
        let num = generateRandomNumber(1, 50);
        if (!isPrime(num)) continue
        array.push(num);
        uniqueArray = [...unique(array)];
    } while (uniqueArray.length < 15)

    let finalArray = [...uniqueArray, ...uniqueArray]

    const structuredDataArray = [];
    finalArray.forEach(item => {
        structuredDataArray.push({
            id: uuidv4(),
            value: item,
            status:""
        })
    })
    const shakeArray = () => {
        return Math.random() - 0.5;
    }
    return structuredDataArray.sort(shakeArray);
}
// console.log(createRandomArray())