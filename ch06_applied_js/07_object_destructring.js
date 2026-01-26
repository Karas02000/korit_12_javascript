function getPerson() {
    return {
        fName: '영',
        lName: '김',
        age: 20,
        email: 'kim@test.com',
        city: '부산광역시',
        contry: '대한민국',
    };
}

const person = getPerson();

console.log(`해당 지원자는 ${person.city}에 살고있으며, email은 ${person.email} 입니다.`);


function displayFullName({fName, lName}) {
    console.log(`${lName}${fName}`);
}

displayFullName(getPerson());