const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loadingIndicator = document.getElementById('loading');
const apiKeyModal = document.getElementById('api-key-modal');
const apiKeyInput = document.getElementById('api-key-input');
const saveKeyBtn = document.getElementById('save-key-btn');

let GOOGLE_API_KEY = '';

saveKeyBtn.addEventListener('click', () => {
    const key = apiKeyInput.value.trim();
    if(key) {
        GOOGLE_API_KEY = key;
        apiKeyModal.style.display = 'none';
    } else {
        alert('API Key를 입력하여 주세요.');
    }
});

// async function sendMessage() {
//     const message = userInput.value.trim();

//     if (message === '') return;

//     // 1) 사용자 메시지 화면에 표시
//     appendMessage('user', message);
//     userInput.value = '';

//     // 2) 로딩 애니메이션 켜기
//     showLoading(true);

//     try {
//         // 3) Gemini API 호출 (fetchAPI 사용)
//         const model = 'gemini-2.5-flash'
//         const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}?key=${GOOGLE_API_KEY}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json',
//             },
//             body: JSON.stringify({
//                 contens: [{
//                     parts: [{ text: message }]
//                 }]
//             })
//         });

//         const data = await response.json();
//         // 4) 응답 데이터 확인
//         if(data.candidates && data.candidates[0].content) {
//             const botResponse = data.candidates[0].content.parts[0].text;
//         } else {
//             appendMessage('bot','죄송합니다 오류가 발생했습니다. API Key를 확인해주세요.');
//             console.log('Error : ', data);
//         }
//     } catch(error) {
//         console.log('Fetch error : ',error);
//         appendMessage('bot','네트워크 오류가 발생했습니다.')
//     } finally {
//         // 5) 로딩 끄기
//         showLoading(false);
//     }
// }

async function sendMessage() {
    // userInput과 appendMessage, showLoading 함수가 외부에 정의되어 있다고 가정합니다.
    const message = userInput.value.trim();

    if (message === '') return;

    // 1) 사용자 메시지 화면에 표시
    appendMessage('user', message);
    userInput.value = '';

    // 2) 로딩 애니메이션 켜기
    showLoading(true);

    try {
        // 3) Gemini API 호출
        const model = 'gemini-2.5-flash';
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GOOGLE_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // [수정 1] content -> contents (복수형이어야 함)
                contents: [{
                    parts: [{ text: message }]
                }]
            })
        });

        const data = await response.json();

        // 4) 응답 데이터 확인 및 처리
        // [수정 2] datacandidates -> data.candidates (점 추가)
        if (data.candidates && data.candidates[0].content) {
            
            // [수정 2] 동일한 오타 수정
            const botResponse = data.candidates[0].content.parts[0].text;
            
            // [수정 3] 봇의 응답을 화면에 추가하는 코드 작성
            appendMessage('bot', botResponse);

        } else {
            // API 키 오류나 모델 오류 등 data에 candidates가 없는 경우 처리
            appendMessage('bot', '죄송합니다. 올바른 응답을 받지 못했습니다.');
            console.error('API Error Response:', data); 
        }

    } catch (error) {
        console.error('Fetch error:', error);
        appendMessage('bot', '네트워크 오류가 발생했습니다.');
    } finally {
        // 5) 로딩 끄기
        showLoading(false);
    }
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender=='user' ? 'user-message' : 'bot-message');

    let formattedText = text.replace(/\n/g, '<br>');
    messageDiv.innerText = formattedText;

    chatHistory.appendChild(messageDiv);

    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function showLoading(isLoading) {
    if(isLoading) {
        loadingIndicator.style.display = 'block';
        chatHistory.scrollTop = chatHistory.scrollHeight;
    } else {
        loadingIndicator.style.display = 'none';
    }
}

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', e => {
    if(e.key === 'Enter') sendMessage()
})