let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
let arr3 = [...arr2, ...arr1];
console.log(arr3);

/*
    arr1, arr2는 자료형이 배열이지만, 이 둘을 참조한 arr3은 자료형이 배열이 아니다.
    출력된건 호출된 각 배열의 내부 element이다.
    겉보기에는 같기에 착각하기 쉽다.
*/

let cd = 'CD';
let alphabets = ['A', 'B', ...cd];

console.log(alphabets);

for (let i=0 ; i < alphabets.length ; i++) {
    alphabets[i] = alphabets[i].toLowerCase();
}

console.log(alphabets);