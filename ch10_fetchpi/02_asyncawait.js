function myFunction() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json =>console.log(json));
}

myFunction();

function myFunction2() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            fetch("http://jsonplaceholder.typicode.com/posts/1",{
                method: 'PUT',
                body: JSON.stringify({
                    id:1,
                    title: '이거 다음에는 promise 타입 학습',
                    body: '그 이후는 아마 자습',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then(json =>console.log(json))
    });
}

myFunction2();

async function myFunction3() {
    const res1 = await fetch("http://jsonplaceholder.typicode.com/posts/1");
    const res1Json = await res1.json();
    console.log(res1Json);

    const res2 = await fetch("http://jsonplaceholder.typicode.com/posts/2",{
        method: 'PUT',
        body: JSON.stringify({
            id: 2,
            title: "원투쓰리",
            body: "포파이브식스",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const res2Json = await res2.json();
    console.log(res2Json);x
}
myFunction3();