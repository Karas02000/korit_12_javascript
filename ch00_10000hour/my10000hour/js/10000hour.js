const inputSub = document.getElementById('sub_input');
const inputTime = document.getElementById('time_input');
const get_ok_btn = document.getElementById('ok_btn');
// getElementsByClassName은 리스트를 반환하므로 [0]으로 첫 번째 요소 선택
const result_container = document.getElementsByClassName('output')[0];

function calcResult() {
    const subValue = inputSub.value.trim();
    const timeValue = parseInt(inputTime.value);

    if (timeValue <= 24 && timeValue > 0 ){// 유효성 검사: 입력값이 없거나 숫자가 아니면 실행 중단
    if (!subValue || isNaN(timeValue) || timeValue <= 0) {
        alert('분야와 시간을 정확히 입력해주세요! 😊');
        return;
    }

    // 결과 계산 (1만 시간의 법칙)
    const totalDays = Math.ceil(10000 / timeValue);
    const totalYears = Math.ceil(totalDays / 365);

    // 기존 결과 초기화 (누적 방지)
    result_container.innerHTML = '';

    // 결과 HTML 생성 및 출력
    displayResult(subValue, totalDays);
    } else {
        alert("올바른 시간을 입력하여 주십시오.")
    }
}

function displayResult(subject, days) {
    // 1. 첫 번째 문장: 당신은 [분야] 전문가가 되기 위해서
    const line1 = document.createElement('div');
    line1.className = 'result-line';
    
    const text1_1 = document.createTextNode('당신은 ');
    const spanSub = document.createElement('strong'); // 강조 효과를 위해 strong 사용
    spanSub.className = 'result-var';
    spanSub.textContent = subject;
    const text1_2 = document.createTextNode(' 전문가가 되기 위해서');
    
    line1.append(text1_1, spanSub, text1_2);

    // 2. 두 번째 문장: 대략 [일수] 일 이상 훈련하셔야 합니다!
    const line2 = document.createElement('div');
    line2.className = 'result-line';

    const text2_1 = document.createTextNode('대략 ');
    const spanDays = document.createElement('strong');
    spanDays.className = 'result-var';
    spanDays.textContent = days;
    const text2_2 = document.createTextNode(' 일 이상 훈련하셔야 합니다! :)');

    line2.append(text2_1, spanDays, text2_2);

    // 컨테이너에 최종 삽입
    result_container.append(line1, line2);
}

get_ok_btn.addEventListener('click', calcResult);