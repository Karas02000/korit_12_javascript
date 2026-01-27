const inputSub = document.getElementById('sub_input');
const inputTime = document.getElementById('time_input');

function calcResult() {
    const input_sub_value = inputSub.value;
    const input_time_value = parseInt(inputTime.value);

    console.log(input_sub_value);
    console.log(input_time_value);
}

function sayHello() {
  alert('안녕하세요! 버튼이 클릭되었습니다.');
  calcResult();
}
