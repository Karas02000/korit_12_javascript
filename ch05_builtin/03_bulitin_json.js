let data = {
    "employees" : [
        {"fName" : "영", "lName" : "김"},
        {"fName" : "일", "lName" : "김"},
        {"fName" : "이", "lName" : "김"}
    ]
};

console.log(data.employees[2].lName + data.employees[2].fName);
console.log(data);

let stringValue = JSON.stringify(data);

console.log(stringValue);

let text = '{"employees":[{"fName":"영","lName":"김"},{"fName":"일","lName":"김"},{"fName":"이","lName":"김"}]}';

let jsObj = JSON.parse(text);
console.log(jsObj);