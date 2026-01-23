let age =12;
let busFare = 0;

if ( age < 7 ) {
    busFare = 0;
} else if ( age >= 7 && age < 13) {
    busFare = 720;
} else if ( age >= 13 && age < 19) {
    busFare = 1200;
} else if ( age >= 19 && age < 70) {
    busFare = 1550;
} else {
    busFare = 0;
}

console.log(busFare + "원");

let height = 172;
let weight = 68;
let bmi = 0;
let grade = '';

// 체중(kg) ÷ (신장(m) × 신장(m))
bmi = weight / ((height*height)/10000);
bmi = bmi.toFixed(2);

if ( bmi < 18.5) {
    grade = '저체중';
} else if ( bmi < 23 ) {
    grade = '정상체중';
} else if ( bmi < 25 ) {
    grade = '비만 전단계';
} else if ( bmi < 30 ) {
    grade = '1단계 비만';
} else if ( bmi < 35) {
    gread = '2단계 비만';
} else {
    grade = '3단계 비만';
}

console.log('당신의 bmi 지수는 ' + bmi + '이고 ' + grade + '입니다.');