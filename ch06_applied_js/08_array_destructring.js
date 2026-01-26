function getScore() {
    return [70, 80, 90];
}
let score = getScore();
let x = score[0];
let y = score[1];
let z = score[2];

let [a,b,c] = getScore();

console.log(a);
console.log(b);
console.log(c);

let [q,w,e,r] = [1,2,3];

console.log(q);
console.log(w);
console.log(e);
console.log(r); // 출력 결과 : undefined
