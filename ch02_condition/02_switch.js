let date = new Date();
let day = date.getDay();
console.log(day); // 일요일을 첫 인덱스로 하는 0~6까지의 인덱스값을 반환
let dayName = '';

switch (day) {
    case 0 :
        dayName = '일';
        break;
    case 1 :
        dayName = '월';
        break;
    case 2 :
        dayName = '화';
        break;
    case 3 :
        dayName = '수';
        break;
    case 4 :
        dayName = '목';
        break;
    case 5 :
        dayName = '금';
        break;
    case 6 :
        dayName = '토';
        break;
}

console.log('오늘은 ' + dayName + '요일 입니다.');