let brands = ["애플", "구글", "메타", "아마존", "삼성"];
console.log(brands);

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

console.log('반복문 부분입니다.');
for (let i=0 ; i < brands.length ; i++) {
    console.log(brands[i]);
}

let productList=[
    {
        name: '솔의 눈',
        price: '1300'
    },{
        name: '커피',
        price: '2500'
    },{
        name: '파워에이드',
        price: '1800'
    },{
        name: '오렌지 쥬스',
        price: '1200'
    },{
        name: '보리차',
        price: '1700'
    },{
        name: '콜라',
        price: '2200'
    }
]

console.log('이것은 음료수이름 반복문입니다.');

for ( let i=0 ; i<productList.length ; i++) {
    console.log(productList[i]['name']);
}