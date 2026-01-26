const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 초기 데이터 불러오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  // 1. 기존 리스트 비우기 (중복 방지)
  todoList.innerHTML = '';

  // 2. todos 배열을 순회하며 HTML 요소 생성
  // .array.forEach가 아니라 그냥 .forEach입니다!
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';

    // 요소 조립
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);
    todoList.appendChild(li);

    // --- 이벤트 리스너 ---
    
    // 체크박스 변경 시 상태 업데이트
    checkbox.addEventListener('change', () => {
      todos[index].completed = checkbox.checked;
      li.classList.toggle('completed', checkbox.checked);
      saveTodos();
    });

    // 삭제 버튼 클릭 시 (index를 활용하면 더 간단합니다)
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1); // 배열에서 해당 인덱스 삭제
      renderTodos();           // 화면 다시 그리기
      saveTodos();            // 저장
    });
  });
} // <--- renderTodos 함수 끝 (이 괄호가 빠져있었습니다)

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('내용을 입력하세요.');
    return;
  }

  const newTodo = {
    text: todoText,
    completed: false,
  };

  todos.push(newTodo);
  todoInput.value = '';
  renderTodos();
  saveTodos();
}

// 이벤트 연결
addBtn.addEventListener('click', addTodo);

// 엔터키 지원 추가
todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// 페이지 로드 시 기존 데이터 렌더링
window.onload = renderTodos;