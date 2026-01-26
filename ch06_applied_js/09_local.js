if(typeof Storage !== 'undefined') {
    localStorage.setItem('title' , '위대한개츠비');
}

const users = [
    {id: 1, name: 'Bart'},
    {id: 2, name: 'Homer'}
];

localStorage.setItem('users', JSON.stringify(users));

console.log(users);
console.log(JSON.stringify(users));

if(typeof Storage !== 'undefined') {
    console.log(localStorage.getItem('title'));

    console.log(localStorage.getItem('users'));

    console.log(JSON.parse(localStorage.getItem('users')));
}

let users2 = JSON.parse(localStorage.getItem('users'));
let kim = users2[0].name;
console.log(kim);

localStorage.removeItem('title');
