let fName = 'Homer';
let lName = 'Simson';
// 변수 대입과 값 대입이 반 필수

let person = {
    firstName : fName,
    lastName : lName,
};

console.log(fName);
console.log(person.firstName);
console.log(person['firstName']);

/*
    Object 상에서는 변수에 할당된 값을 key로 치환해서 사용하는 것은 불가능합니다.

    하지만 object literal syntax extension을 사용하면 object의 키로 변수에 할당된 '문자열' 값을 사용할 수 있습니다. 대괄호 ([])를 사용합니다.
*/

let type = 'student';
let score = {
    [type] : 'Jane',
    score : 95,
}

console.log(score.score);
console.log(score);
console.log(score.student);